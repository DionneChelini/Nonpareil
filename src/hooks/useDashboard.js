import { useEffect, useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getStorage,
  getDownloadURL,
} from "firebase/storage";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const useDashboard = ({
  files,
  productData,
  submit,
  setSubmit,
  setFiles,
  setProductData,
}) => {
  const [progress, setProgress] = useState();
  useEffect(() => {
    if (files.length === 0) return;
    const ar = [];
    const storage = getStorage();
    for (let i = 0; i < files.length; ++i) {
      ar.push(saveImage(storage, files[i]));
    }
    Promise.all(ar).then((res) => res.length && saveProduct(productData, res));
    //This function only runs where there is a change in files
    setSubmit(false);
    setFiles([]);

    setProductData({
      title: "",
      description: "",
      category: "",
      subcategory: "",
      price: "",
      details: [
        { name: "material", item: [] },
        { name: "dimensions", item: [] },
        { name: "delivery", item: [] },
        { name: "product_id", item: [] },
      ],
    });
  }, [submit]);

  const saveImage = (storage, file) => {
    return new Promise((resolve) => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        //callback
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        //callback
        (error) => {
          console.log(error);
        },
        //callback
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve({ urls: downloadURL });
          });
        }
      );
    });
  };

  function saveProduct(productData, urls) {
    console.log("fired");
    addDoc(collection(db, "products"), {
      ...productData,
      urls,
      ImageAlt: `Nonparel Collection: The Ultimate Destination For Luxurious Home & Office Furniture | ${productData.title}`,
    });
    setProgress();
  }

  return { progress };
};

export default useDashboard;
