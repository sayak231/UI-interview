import React from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = React.useState(false);

  const handleClick = () => {
    setExpand((prev) => !prev);
  };

  //   if (explorer?.items) {
  //     return (
  //       <>
  //         <div
  //           style={{ cursor: "pointer" }}
  //           onClick={handleClick}
  //           className="folder-name"
  //         >
  //           {explorer.name}
  //         </div>
  //         {expand &&
  //           explorer.items.map((item) => {
  //             return (
  //               <div key={item.id} style={{ paddingLeft: "15px" }}>
  //                 <Folder explorer={item} />
  //               </div>
  //             );
  //           })}
  //       </>
  //     );
  //   }
  return (
    <>
      <div
        style={{ cursor: explorer?.items ? "pointer" : null }}
        onClick={explorer?.items ? handleClick : null}
        className="folder-name"
      >
        {explorer.name}
      </div>
      {explorer?.items &&
        expand &&
        explorer.items.map((item) => {
          return (
            <div key={item.id} style={{ paddingLeft: "15px" }}>
              <Folder explorer={item} />
            </div>
          );
        })}
    </>
  );
};

export default Folder;
