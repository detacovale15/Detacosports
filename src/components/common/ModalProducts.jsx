import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";
import Input from "./Input";
import Button from "./Button";

const ModalProducts = ({ isOpen, onClose, producto, onGuardar }) => {
  const esEdicion = Boolean(producto);
  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombre: "",
      marca: "",
      precio: "",
      stock: "",
      estado: "activo",
    },
  });

  useEffect(() => {
    if (producto) {
      reset({
        nombre: producto.nombre ?? "",
        marca: producto.marca ?? "",
        precio: producto.precio ?? "",
        stock: producto.stock ?? "",
        estado: producto.estado ?? "activo",
      });
    } else {
      reset({
        nombre: "",
        marca: "",
        precio: "",
        stock: "",
        estado: "activo",
      });
    }
  }, [producto, reset]);

  const onSubmit = async (data) => {
    try {
      const imagen = data.imagen?.[0];
      delete data.imagen;

      const productoData = {
        ...data,
        precio: Number(data.precio),
        stock: Number(data.stock),
        estado: data.estado,
      };
      await onGuardar(productoData, imagen, esEdicion ? producto.id : null);

      onClose();
    } catch (error) {
      console.error("Error al guardar el producto:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <Button
            type="button"
            className="modal-close"
            icono={<Icon icon="mdi:close" width="24" height="24" />}
            texto=""
            onClick={onClose}
            aria-label="Cerrar"
          />
          <h2>{esEdicion ? "Editar Producto" : "Nuevo Producto"}</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
          <div className="form-group">
            <Input
              label="Nombre del Producto"
              name="nombre"
              register={register}
              placeholder="Nombre del producto"
              rules={{ required: "El nombre es obligatorio" }}
              error={errors.nombre}
            />
          </div>
          {producto?.imagen && (
            <img
              src={producto.imagen}
              alt="Imagen del producto"
              style={{ width: 160, marginBottom: 12, borderRadius: 8 }}
            />
          )}

          <div className="form-group">
            <Input
              label="Marca"
              name="marca"
              register={register}
              placeholder="Marca del producto"
              rules={{ required: "La marca es obligatoria" }}
              error={errors.marca}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <Input
                label="Precio"
                type="number"
                name="precio"
                register={register}
                placeholder="15000"
                rules={{ valueAsNumber: true }}
                error={errors.precio}
              />
            </div>

            <div className="form-group">
              <Input
                label="Stock"
                type="number"
                name="stock"
                register={register}
                rules={{ valueAsNumber: true }}
                error={errors.stock}
              />
            </div>
          </div>

          {!producto && (
            <div className="form-group image-upload">
              <label>Imagen del producto</label>
              <div className="image-upload-box">
                {preview ? (
                  <img src={preview} alt="Preview" className="image-preview" />
                ) : (
                  <span>Click para subir imagen</span>
                )}

                <input
                  type="file"
                  accept="image/*"
                  {...register("imagen", {
                    required: "Subí una imagen",
                    onChange: (e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setPreview(URL.createObjectURL(file));
                      }
                    },
                  })}
                />
              </div>
              {errors.imagen && (
                <span className="input-error-message">
                  {errors.imagen.message}
                </span>
              )}
            </div>
          )}

          <div className="form-group">
            <Input as="select" label="Estado" name="estado" register={register}>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </Input>
          </div>
          <div className="modal-actions">
            <Button type="submit" className="btn-guardar" texto="Guardar" />
            <Button
              type="button"
              className="btn-cancelar"
              onClick={onClose}
              texto="Cancelar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalProducts;
