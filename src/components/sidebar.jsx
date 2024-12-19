export default function Sidebar(){
    return (
        <div className="bg-blue-900 text-white p-4">
            <h1 className="text-xl font-bold">My App</h1>
            <nav>
                <a href="/" className="mr-4">Home</a>
                <a href="/welcome" className="mr-4">Welcome</a>
                <a href="/src/components/favourites" className="mr-4">Favourites</a>
            </nav>
        </div>
    );
};