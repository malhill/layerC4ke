import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div>
            <Header/>
            <h1>I am the layout component</h1>
            <div>{children}</div>
        </div>
    )
};