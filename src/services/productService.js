import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";

const productsRef = collection(db, "products");

export const obtenerProductos = async () => {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const actualizarProducto = async (id, data) => {
  const ref = doc(db, "products", id);
  await updateDoc(ref, data);
};

export const eliminarProducto = async (id) => {
  const ref = doc(db, "products", id);
  await deleteDoc(ref);
};

export const crearProducto = async (data) => {
  await addDoc(productsRef, data);
};
