import Header from './components/Header/Header';
import BlogCard from './components/BlogCard/BlogCard';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <BlogCard 
              title="TITLE HEADING"
              date="Title description,"
              description="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat."
              image="https://www.w3schools.com/w3images/woods.jpg"
              comments={0}
            />
            <BlogCard 
              title="BLOG ENTRY"
              date="Title description,"
              description="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat."
              image="https://www.w3schools.com/w3images/bridge.jpg"
              comments={2}
            />
          </div>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}