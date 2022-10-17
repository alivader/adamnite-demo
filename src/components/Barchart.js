import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    uv: 4000,
    pv: 2200,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1328,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3420,
    pv: 4200,
    amt: 2100,
  },{
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 11720,
    pv: 2908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 6200,
    pv: 2200,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1290,
    pv: 4200,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3200,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3020,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3208,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 11800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3928,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3420,
    pv: 4200,
    amt: 2100,
  },
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3020,
    pv: 1328,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 5820,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4820,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3200,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4200,
    amt: 2100,
  },
  {
    uv: 4000,
    pv: 2200,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3928,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3820,
    amt: 2500,
  },
  {
    uv: 3420,
    pv: 4200,
    amt: 2100,
  },
  {
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3020,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 8800,
    amt: 2290,
  },
  {
    uv: 2720,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2290,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 4000,
    pv: 2200,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 7820,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3820,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 4000,
    pv: 2200,
    amt: 2400,
  },
  {
    uv: 3020,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2000,
    pv: 6800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1290,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },{
    uv: 4000,
    pv: 2420,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2020,
    pv: 9600,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3820,
    amt: 2500,
  },
  {
    uv: 3420,
    pv: 4300,
    amt: 2100,
  }
];

export default class Example extends PureComponent {

  render() {
    return ( 
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
            width={800}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <Bar dataKey="pv" stackId="a" fill="#A6A6A6" />
            <Bar dataKey="uv" stackId="a" fill="#505050" />
            </BarChart>
        </ResponsiveContainer>
    );
  }
}
