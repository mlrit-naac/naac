import React from 'react'
const headings = [{id:1,item:'Year'},{id:2,item:'2020-2021'},{id:3,item:'2019-2020'},{id:4,item:'2018-2019'},{id:5,item:'2017-2018'},{id:6,item:'2016-2017'}]
const row1 = [{id:1,item:'Number of Students Admitted'},{id:2,item:2075},{id:3,item:1992},{id:4,item:1916},{id:5,item:779},{id:6,item:757}]
const row2 = [{id:1,item:'Number of Seats Sanctioned'},{id:2,item:2075},{id:3,item:1992},{id:4,item:1916},{id:5,item:779},{id:6,item:757}]

const Crit2_1_1table = () => {
    return (
        <table className="table-auto overflow-x-auto border-collapse border border-black bg-white">
        <thead>
          <tr>
            {
              headings.map(function(data){
                return(
                  <th className='p-2 border border-black' key={data.id}>
                    <p className='text-center  text-lg font-bold text-black'>{data.item}</p>
                  </th>
                )
              })
            }
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              row1.map(function(data){
                return(
                  <td className='p-2 border border-black' key={data.id}>
                    <p className='text-center  text-lg text-black'>{data.item}</p>
                  </td>
    
                )
              })
            }
          </tr>
          <tr>
            {
              row2.map(function(data){
                return(
                  <td className='p-2 border border-black' key={data.id}>
                    <p className='text-center  text-lg text-black'>{data.item}</p>
                  </td>
    
                )
              })
            }
          </tr>
        </tbody>
    </table>
      )
}

export default Crit2_1_1table