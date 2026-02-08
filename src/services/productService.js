import { db } from "../config/firebase";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  orderBy,
  startAt,
  endAt,
  where,
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

export const searchProducts = async (searchText) => {
  if (!searchText) return [];

  const productsRef = collection(db, "products");

  // Consulta por prefijo usando startAt y endAt
  const q = query(
    productsRef,
    orderBy("name"),
    startAt(searchText),
    endAt(searchText + "\uf8ff"),
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const obtenerDestacados = async () => {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("destacado", "==", true));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
