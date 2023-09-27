import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";


const Statistics = () => {
    const item = JSON.parse(localStorage.getItem("donation"));
    // console.log(item.length);
    const a =item.length
    const b =12 - a;
    const yourDonation =(a/(a+b))*100;
    const totalDonation =(b/(a+b))*100;
    const data = [
        { name: "Your Donation", value: yourDonation, color: "green" },
        { name: "Total Donation", value: totalDonation, color: "red" }
      ];
      
  
  
    return (
        <div>
            
            <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="value" data={data} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {data.map((item) => (
          <p>
            {" "}
            <span
              style={{ padding: "1px 10px ", backgroundColor: item.color }}
            ></span>{" "}
            {item.name}
          </p>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Statistics;