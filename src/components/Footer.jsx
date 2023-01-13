import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
    return (
        <div className='footer'>
            <footer>
                <div className='footer-div'>
                    <p>
                        İlk dizayn, eksklüziv təkliflər və dizayn ilhamınız üçün 15% ENDİRİM əldə etmək üçün qeydiyyatdan keçin.
                    </p>
                    <div className="input">
                        <input id='f-sign-up' type="text" />
                        <label htmlFor="f-sign-up"> Sign Up
                        </label>
                    </div>
                    <p>
                        Qeydiyyatdan keçməklə siz xidmət şərtlərimiz və məxfilik siyasətimizlə razılaşırsınız.
                    </p>
                </div>
                <table>
                    <thead >
                        <tr>
                            <th>
                                Frntr
                            </th>
                            <th>
                                About
                            </th>
                            <th>
                                Support
                            </th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td >
                                <NavLink to='/design_ideas'>
                                    Dizayn İdeaları
                                </NavLink>
                            </td>
                            <td>
                                Brendlərimiz
                            </td>
                            <td>
                                FAQs
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <NavLink to='/blog'>
                                    Blog
                                </NavLink>
                            </td>
                            <td>
                                22
                            </td>
                            <td >
                                Contact Us
                            </td>
                        </tr>
                        <tr>
                            <td>
                                111
                            </td>
                            <td>
                                222
                            </td>
                            <td >
                                Xidmət şərtləri
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1111
                            </td>
                            <td>
                                2222
                            </td>
                            <td >
                                3333
                            </td>
                        </tr>
                    </tbody>
                </table>
            </footer>
        </div>
    )
}

export default Footer