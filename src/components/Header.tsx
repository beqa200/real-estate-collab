"use client"

import { Link, useLocation } from "react-router-dom"
import logo from "../images/home/Logo.png"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function Header() {
    const [open, setOpen] = useState<boolean>(false)
    const handleClick = () => {
        setOpen(!open)
    }
    const location = useLocation()

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [open])

    useEffect(() => {
        setOpen(false)
    }, [location])

    return (
        <div className="bg-[#1A1A1A] relative">
            <div className="flex py-10 items-center justify-between lg:justify-around mx-10">
                <div>
                    <Link to={'/'}>
                        <img className="w-[100px] cursor-pointer" src={logo || "/placeholder.svg"} alt="Logo of the company" />

                    </Link>
                </div>

                {!open && (
                    <button onClick={handleClick} className="lg:hidden z-50">
                        <div className="flex flex-col cursor-pointer items-end gap-2 transition-all duration-300">
                            <div className="w-[27px] bg-white h-[2px] transition-all duration-300"></div>
                            <div className="w-[21px] bg-white h-[2px] transition-all duration-300"></div>
                            <div className="w-[15px] bg-white h-[2px] transition-all duration-300"></div>
                        </div>
                    </button>
                )}

                <div
                    className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                    onClick={handleClick}
                />

                <div
                    className={`fixed inset-0 z-50 lg:hidden flex flex-col items-center justify-center transition-all duration-500 ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                        }`}
                >
                    <div className="flex text-white gap-10 flex-col items-center">
                        <X
                            onClick={handleClick}
                            className="text-[35px] text-white cursor-pointer hover:rotate-90 transition-transform duration-300"
                        />
                        <div>
                            <ul className="flex flex-col text-[18px] items-center gap-12">
                                {[
                                    { to: "/", label: "Home" },
                                    { to: "/about", label: "About Us" },
                                    { to: "/properties", label: "Properties" },
                                    { to: "/services", label: "Services" },
                                ].map((item, index) => (
                                    <li
                                        key={item.to}
                                        className={`transform transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                            }`}
                                        style={{
                                            transitionDelay: open ? `${index * 100}ms` : "0ms",
                                        }}
                                    >
                                        <Link
                                            to={item.to}
                                            className={`px-7 py-5 rounded-2xl transition-colors duration-300 hover:bg-[#1f1f1f] ${location.pathname === item.to ? "bg-[#141414]" : ""
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}

                                {/* Mobile Contact Us Button */}
                                <li
                                    className={`lg:hidden transform transition-all duration-500 ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                        }`}
                                    style={{
                                        transitionDelay: open ? "400ms" : "0ms",
                                    }}
                                >
                                    <Link
                                        to={"/contact"}
                                        className="px-7 py-5 rounded-2xl bg-[#141414] transition-transform duration-300 hover:scale-105"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex text-white items-center">
                    <ul className="flex text-[18px] items-center gap-12">
                        <li>
                            <Link
                                to={"/"}
                                className={`px-7 py-5 rounded-2xl transition-colors duration-300 hover:bg-[#1f1f1f] ${location.pathname === "/" ? "bg-[#141414]" : ""}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/about"}
                                className={`px-7 py-5 rounded-2xl transition-colors duration-300 hover:bg-[#1f1f1f] ${location.pathname === "/about" ? "bg-[#141414]" : ""}`}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`px-7 py-5 rounded-2xl transition-colors duration-300 hover:bg-[#1f1f1f] ${location.pathname === "/properties" ? "bg-[#141414]" : ""}`}
                                to={"/properties"}
                            >
                                Properties
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`px-7 py-5 rounded-2xl transition-colors duration-300 hover:bg-[#1f1f1f] ${location.pathname === "/services" ? "bg-[#141414]" : ""}`}
                                to={"/services"}
                            >
                                Services
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:block">
                    <ul>
                        <li className="text-white text-[16px]">
                            <Link
                                to={"/contact"}
                                className="px-7 py-5 rounded-2xl bg-[#141414] transition-transform duration-300 hover:scale-105"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

