import React from "react";
const headings = [{id:1,item:'Year'},{id:2,item:'2020-2021'},{id:3,item:'2019-2020'},{id:4,item:'2018-2019'},{id:5,item:'2017-2018'},{id:6,item:'2016-2017'}]
const row1 = [{id:1,item:'Focusing course on various skill'},{id:2,item:561},{id:3,item:572},{id:4,item:572},{id:5,item:552},{id:6,item:289}]
const row2 = [{id:1,item:'Courses offered'},{id:2,item:576},{id:3,item:634},{id:4,item:634},{id:5,item:597},{id:6,item:444}]

const Crit1_1_1table = () => {
  return (
    <table className="table-auto overflow-x-auto border-collapse border border-black bg-white">
      <thead>
        <tr>
          {headings.map(function(data){
            return (
              <th className="p-2 border border-black" key={data.id}>
                <p className="text-center  text-lg font-bold text-black">{data.item}</p>
              </th>
            )
          })}
          
          
        </tr>
      </thead>
      <tbody>
        <tr>
          {
            row1.map(function(data){
              return (
                <td className="p-2 border border-black" key={data.id}>
                  <p className="text-center  text-lg text-black">
                    {data.item}
                  </p>
                </td>
              )
            })
          }
        </tr>
        <tr>
          {
            row2.map(function(data){
              return(
                  <td className="p-2 border border-black" key={data.id}>
                    <p className="text-center  text-lg text-black" >{data.item}</p>
                  </td>
              )
            })
          }
        </tr>
      </tbody>
    </table>
  );
};

export default Crit1_1_1table;
