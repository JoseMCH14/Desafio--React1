import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';


function App() {
  return (
    <>
     <Header title="Adopta un perrito"/>
     <div className='row mt-4 mb-2'>
     <div className='col mx-auto'>
     <MyCard
        image="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Zeus"
        descripcion="Una combinación perfecta de belleza y espíritu aventurero, listo para ser tu compañero leal en todas tus aventuras."
        txt="Husky"
        color="success"
      />
      </div>
      <div className='col mx-auto'>
      <MyCard
        image="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="Pluto"
        descripcion="una mezcla única de energía y cariño, listo para llenar tu hogar de diversión y amor incondicional."
        txt="Botbail"
        color="danger"
      />
      </div>
       <div className='col'>
      <MyCard
        image="https://images.pexels.com/photos/92380/pexels-photo-92380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Firulais"
        descripcion="un compañero juguetón y cariñoso que hará sonreír a tu familia todos los días."
        txt="Beagle"
        color="warning"
      />
      </div>
      </div>
      <Footer text="Encuentra tu compañero perfecto entre nuestros perros rescatados. ¡Adopta amor y alegría hoy!"/>
</>
  )
}

export default App
