import React from 'react';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



 export  const toastSuccess = (toastMessage: string) => {
      toast.success(toastMessage, {
        position: toast.POSITION.TOP_RIGHT
    });
  };

  export  const toastError = (toastMessage: string) => {
    toast.error(toastMessage, {
      position: toast.POSITION.TOP_RIGHT
  });
};

  