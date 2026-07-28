import React from 'react'
import Link from 'next/link'
import '../globals.css'

const Nav = () => (
  <nav className="nav-container">
    <Link href="/" className="nav-link">Главная</Link>
    <Link href="/news" className="nav-link">Новости</Link>
    <Link href="/catalog" className="nav-link">Каталог</Link>
    <Link href="/admin" className="nav-link">Админка</Link>
  </nav>
)

export default Nav