import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'

import { FiBookmark } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { FiShoppingBag } from 'react-icons/fi'
import { FiPieChart } from 'react-icons/fi'

import './App.scss'
import Btn from './components/Btn'

function App() {
    const pressedKeyState = useState(0)

    return (
        <div className="App">
            <div style={{ top: isMobile ? 'auto' : '50px', bottom: isMobile ? '25px' : 'auto' }} className="comment">
                {'// Анти-стресс кнопки ждут, когда вы их нажмете :)'}
            </div>
            <div
                style={{ display: isMobile ? 'block' : 'flex', height: isMobile ? 'auto' : '100vh' }}
                className="container"
            >
                <div>
                    <div
                        style={{
                            borderRadius: isMobile ? 0 : '25px'
                        }}
                        className="content-wrapper"
                    >
                        <div className="subtitle">1. Тип сайта:</div>
                        <div className="types">
                            <Btn
                                index={1}
                                pressedKeyState={pressedKeyState}
                                icon={
                                    <div>
                                        <svg width="0" height="0">
                                            <linearGradient
                                                gradientTransform="rotate(90)"
                                                id="blue-gradient"
                                                x1="100%"
                                                y1="100%"
                                                x2="0%"
                                                y2="0%"
                                            >
                                                <stop stopColor="#12c3fa" offset="60%" />
                                                <stop stopColor="#0461ea" offset="100%" />
                                            </linearGradient>
                                        </svg>
                                        <FiUsers
                                            style={{ stroke: pressedKeyState[0] === 1 ? 'url(#blue-gradient)' : '' }}
                                        />
                                    </div>
                                }
                                type="Сайт-визитка"
                                time="до 5 дней"
                                price="от 700 грн."
                            />
                            <Btn
                                index={2}
                                pressedKeyState={pressedKeyState}
                                icon={
                                    <div>
                                        <svg width="0" height="0">
                                            <linearGradient
                                                gradientTransform="rotate(90)"
                                                id="blue-gradient"
                                                x1="100%"
                                                y1="100%"
                                                x2="0%"
                                                y2="0%"
                                            >
                                                <stop stopColor="#12c3fa" offset="60%" />
                                                <stop stopColor="#0461ea" offset="100%" />
                                            </linearGradient>
                                        </svg>
                                        <FiBookmark
                                            style={{ stroke: pressedKeyState[0] === 2 ? 'url(#blue-gradient)' : '' }}
                                        />
                                    </div>
                                }
                                type="Лендинг"
                                time="до 5 дней"
                                price="от 1000 грн."
                            />
                            <Btn
                                index={3}
                                pressedKeyState={pressedKeyState}
                                icon={
                                    <div>
                                        <svg width="0" height="0">
                                            <linearGradient
                                                gradientTransform="rotate(90)"
                                                id="blue-gradient"
                                                x1="100%"
                                                y1="100%"
                                                x2="0%"
                                                y2="0%"
                                            >
                                                <stop stopColor="#12c3fa" offset="60%" />
                                                <stop stopColor="#0461ea" offset="100%" />
                                            </linearGradient>
                                        </svg>
                                        <FiPieChart
                                            style={{ stroke: pressedKeyState[0] === 3 ? 'url(#blue-gradient)' : '' }}
                                        />
                                    </div>
                                }
                                type="Сайт для бизнеса"
                                time="от 7 дней"
                                price="от 3000 грн."
                            />
                            <Btn
                                index={4}
                                pressedKeyState={pressedKeyState}
                                icon={
                                    <div>
                                        <svg width="0" height="0">
                                            <linearGradient
                                                gradientTransform="rotate(90)"
                                                id="blue-gradient"
                                                x1="100%"
                                                y1="100%"
                                                x2="0%"
                                                y2="0%"
                                            >
                                                <stop stopColor="#12c3fa" offset="60%" />
                                                <stop stopColor="#0461ea" offset="100%" />
                                            </linearGradient>
                                        </svg>
                                        <FiShoppingBag
                                            style={{ stroke: pressedKeyState[0] === 4 ? 'url(#blue-gradient)' : '' }}
                                        />
                                    </div>
                                }
                                type="Интернет-магазин"
                                time="от 7 дней"
                                price="от 5000 грн."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
