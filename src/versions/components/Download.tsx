/* 2024-01-07 09:52:57

fetch progress state:
-Download: response.body
-Cancel download: AbortController.signal 
-Upload: xhr


*/

import React from "react";

const Download = () => {
  const downloadAction = () => {
    console.log("downloadAction");
  };
  return (
    <>
      <h3>Chunk Download</h3>
      <div>Download</div>
      <button onClick={downloadAction}>Download</button>
    </>
  );
};

export default Download;

/*
const bookMarkData = {
  id: 1,
  uuid: uuid(),
  title: "title",
  url: "url",
  tags: ["tag1", "tag2"],
  category: category_uuid,
  subTab: subTab_uuid,
  seqNumber: 1,
  createdAt: "2021-01-01",
  updatedAt: "2021-01-01",
  prevTitle: "prevTitle",
  isFavorite: false,
  isArchive: false,
  isDeleted: false,
  prevSeqNumber: 1,
};

const categories = [
  {
    id: 1,
    uuid: uuid(),
    cathegory: "category",
    sequenceNumber: 1,
    isSelected: false,
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    prevCategory: "prevCathegory",
    prevSeqNumber: 1,
  }
];

const subTabs = [
  {
    id: 1,
    uuid: uuid(),
    subTabName: "subTabName",
    sequenceNumber: 1,
    isSelected: false,
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    prevSubTabName: "prevSubTabName",
    prevSeqNumber: 1,
  },
];
*/
