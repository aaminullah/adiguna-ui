import React, { Component } from "react";
import "./slideone.css";
import blob from './blobone.svg';
import trid from './tridone.svg';

class SlideOne extends Component {
    render() {
        return (
            <div className='frstSect'>
                <div className="conleft">
                    <h1 className='judulSect'>Sugeng Rawuh, Pejuang UI 2023!</h1>
                    <p className='descSect'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nulla elit mauris. Lectus ut a sed nunc vehicula elementum rhoncus. Sed quis augue viverra sed tristique venenatis lacus.</p>
                    <a className='button' href='#'>
                        <p className='btnText'>Jelajahi</p>
                        <div className='arrowIcon'>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
                <div className='conright'>
                    <img src={blob} className='blob' alt='blobs'/>
                    <img src={trid} className='tridone' alt='3d'/>
                </div>
            </div>
            
        )
    }
}

export default SlideOne