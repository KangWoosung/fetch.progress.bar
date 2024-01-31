import React from "react";

const Upload = () => {
  const uploadFile = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    if (formElement?.elements.length === 0) {
      console.log("No file selected");
      return;
    }
    const fileInputElement = formElement.elements[0] as HTMLInputElement;
    const file = fileInputElement.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const contents = event.target?.result;
        console.log(contents);
      };
      reader.readAsText(file);
    } else {
      console.log("No file selected");
    }
  };
  return (
    <>
      <div>Upload</div>
      <form onSubmit={uploadFile}>
        <input type="file" />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default Upload;
