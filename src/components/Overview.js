import React from 'react'
import Example from "./Barchart"
import transaction from "../Assets/transaction.PNG"
import transaction2 from "../Assets/transaction2.PNG"
import l1  from "../Assets/loadbalance.PNG"
import firstnumber from "../Assets/firstnumbericon.PNG"
import secondnumber from "../Assets/secondnumbericon.PNG"
import gas from "../Assets/gasicon.PNG"


const Overview = () => {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    const name = "Ali"
  return (
    <div className='overview'>
        <header>
            <h1 className="header-title">
                Overview
            </h1>
                <input className="header-searchbar" type="text" placeholder="Search" onBlur={(e) => e.target.placeholder = 'Search'}/>
        </header>
        <div className="content">
            <div className="content-introduction">
                <h2>Good Morning,</h2>
                <h2 className="introduction-user">{name}</h2>
                <p>Network is running smoothly.</p>
            </div>
            <div className="content-data">
                <div className="data-loadbalance main-module module">
                    <img src={l1} />
                    <h3>L1 Load Balance</h3>
                    <img src={firstnumber} />
                    <h4>1304</h4>
                    <img src={secondnumber} />
                    <h4>97.8667%</h4>
                    <div className='data-graph'>
                        <Example />
                    </div>
                </div>
                <div className="data-transactions side-module module">
                    <img src={transaction2} />
                    <h3>Transactions</h3><h5>Last 7 Days</h5>
                    <p>15,999,999</p>
                </div>
                <div className="data-gasfees side-module module">
                <img src={gas} />
                    <h3>Gas Fees</h3><h5>Last 7 Days</h5>
                    <p>12,999,999,999</p>
                </div>
            </div>
            <div className="content-history">
            <img src={transaction} />
            <h2>Transactions</h2>
                <table>
                    <tr className='title-row'>
                        <th>TIME</th>
                        <th>FROM</th>
                        <th>TO</th>
                        <th>MESSAGE</th>
                        <th>AMOUNT</th>
                    </tr>
                    <tr>
                        <th>23:12:00</th>
                        <th>x12223321***3232323221222</th>
                        <th>x52223321***3232323221222</th>
                        <th>axxx1...12p8</th>
                        <th>1058</th>
                        <th><img src="https://cdn.iconscout.com/icon/free/png-256/menu-215-474985.png" /></th>
                    </tr>
                    <tr>
                        <th>23:12:00</th>
                        <th>x12223321***3232323221222</th>
                        <th>x52223321***3232323221222</th>
                        <th>axxx1...12p8</th>
                        <th>1058</th>
                        <th><img src="https://cdn.iconscout.com/icon/free/png-256/menu-215-474985.png" /></th>
                    </tr>
                    <tr>
                        <th>23:12:00</th>
                        <th>x12223321***3232323221222</th>
                        <th>x52223321***3232323221222</th>
                        <th>axxx1...12p8</th>
                        <th>1058</th>
                        <th><img src="https://cdn.iconscout.com/icon/free/png-256/menu-215-474985.png" /></th>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Overview