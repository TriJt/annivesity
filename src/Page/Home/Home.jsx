import React, { useState, useEffect } from 'react'
import "./home.scss"
import Navbar from '../../components/Navbar/Navbar'; 
import LineImage from '../../components/Images/LineImage/LineImage';
import Heart from '../../components/Heart/Heart';

export default function Home() {
    const [day, setDay] = useState()
    const [extraMonth, setExtraMonth] = useState()
    const [year, setyear] = useState()
    const [allDate, setAllDate] = useState(); 
    const [month, setMonth] = useState()

    useEffect(() => { 
    const getDayToday = new Date();
    const getDayAnni = new Date("2020-08-03");
    const getDayDiff = ( getDayToday.valueOf() -  getDayAnni.valueOf())
    let  getDay = Math.floor( getDayDiff / (24 * 60 * 60 * 1000));
    //lấy số năm
    let getYear = Math.floor(getDay / 365);
    // Số ngày dư
    let extraDateOfYear = getDay - getYear * 365;
    // Tính số tháng và số ngày  trong năm
    const getDayAndMonthExtra = () => { 
    let month = 0;
    let date = 0 ;
    if (extraDateOfYear <= 31) {
        month = 0
    } else { 
        if (extraDateOfYear <= 60) {
            month = 1
            date = extraDateOfYear - 31
        } else {
            if (extraDateOfYear <= 91) {
                month = 2
                date = extraDateOfYear - 60
            }            
            if (extraDateOfYear <= 121) {
                month = 3
                date = extraDateOfYear - 91
            } else { 
                if (extraDateOfYear <= 152) {
                    month = 4
                     date = extraDateOfYear - 121
                } else { 
                    if (extraDateOfYear <= 182) {
                        month = 5
                         date = extraDateOfYear - 152
                    } else {
                        if (extraDateOfYear <= 213) {
                            month = 6
                             date = extraDateOfYear - 182
                        } else { 
                            if (extraDateOfYear <= 243) {
                                month = 7
                                 date = extraDateOfYear - 213
                            } else {
                                if (extraDateOfYear <= 274) {
                                    month = 8
                                     date = extraDateOfYear - 243
                                } else {
                                    if (extraDateOfYear <= 304) {
                                        month = 9
                                         date = extraDateOfYear - 274
                                    } else { 
                                        if (extraDateOfYear <= 334) {
                                            month = 10
                                             date = extraDateOfYear - 304
                                        } else {
                                            if (extraDateOfYear <= 365 && extraDateOfYear > 334) {
                                                month = 11
                                                 date = extraDateOfYear - 334
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        }
        
        
        // Số ngày 
        setAllDate(getDay)
        // Số tháng 
        let extraMonth = getYear * 12 + month;
        setMonth(extraMonth)
        // Số tháng dư 
        setExtraMonth(month); 
        // Số  ngày dư trong tháng 
        setDay(date); 
        // Số năm 
        setyear(getYear)
    } 
    getDayAndMonthExtra()    
    })
    return (
      <div style={{position:"relative"}}>
          <div style={{ position: "fixed", width : "100%", zIndex: 100}}>
              <Navbar/>
          </div>
          <div id="parallax-world-of-ugg" style={{paddingTop: 60}}>
            <section>
                <div className="title">
                    <h3>Let's do some</h3>
                    <h1>PARALLAX</h1>
                </div>
            </section>
            <section>
                
            </section>
            <section>
                <div className="parallax-one">
                    <div className='background-blank'>
                    <h2>{year} năm : {extraMonth} tháng : {day} ngày </h2>

                    </div>
                    <div>
                    <Heart/>
                    </div>
                </div>
                <div>
                
                </div>
            </section>

            <section>
                <div >
                    <LineImage/>
                </div>
            </section>

            <section>
                <div className="parallax-two">
                    <h2>{month} tháng</h2>
                </div>
            </section>

            <section>
            <div className="block">
            </div>
            </section>

            <section>
                <div className="parallax-three">
                    <h2>{allDate} ngày</h2>
                </div>
            </section>

            <section>
            <div className="block">
            </div>
            </section>
  
        </div>
    </div>
  )
}
