import "./globals.css";
import Nav from './components/Nav'



export const metadata = {
  title: "Название Проекта — Главная страница | Краткий слоган",
  description: "Добро пожаловать на наш сайт! Мы предлагаем лучшие решения, товары и сервисы для ваших задач. Узнайте больше о нас.",
  keywords: ["главная", "название бренда", "сервис", "услуги", "онлайн-магазин"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
