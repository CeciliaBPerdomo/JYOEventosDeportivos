import ProximasIconos from "../iconos/proximasIconos";
import Inscribite from "./20250427_boton";

// CSS 
import "./20250427_detalles.css"

const Detalles = () => {


    return (
        <div className="m-5 border border-slate-200 rounded-lg p-4 text-center detalles_fuente">
            <h2 className="text-xl font-bold mb-4">¡Prepárate para vivir una experiencia única en un entorno espectacular!</h2>
            <h4>Puedes participar en este desafío de manera <b>individual</b> o formando <b>postas</b> de 2 o 3 personas.</h4>
            <p> Las categorías disponibles son (edad tomada al 31/12/2025):</p>


            <div className="overflow-x-auto mt-4 flex justify-center">
                <table className="table-auto border-collapse border border-gray-300 text-sm text-left">
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Individuales</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-5">
                                    <li>18-29 años</li>
                                    <li>30-39 años</li>
                                    <li>40-49 años</li>
                                    <li>50-59 años</li>
                                    <li>+60 años</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Postas</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <ul className="list-disc ml-5">
                                    <li>Caballeros</li>
                                    <li>Damas</li>
                                    <li>Mixtos</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="mb-4 mt-1">En todos los casos se requiere un mínimo de 5 inscripciones para formar la categoría.</p>
            <p className="mb-4"><b>Importante</b>: para las postas, se deberán ingresar los datos de las personas, en el orden que participarán. En el caso que sea un equipo de 2 personas, se deberán ingresar 2 veces los datos de la persona que repite disciplina, en la ubicación que corresponda.</p>

            <p>Las distancias a recorrer son desafiantes y emocionantes</p>
            <ProximasIconos />

            <p className="mt-2">Todo en circuitos muy pintorescos del balneario Las Cañas y sus alrededores.</p>

            <h3 className="mt-4">🔖Precios:</h3>
            <ol className="mb-4">
                <li>Individual: <b>U$S 150</b></li>
                <li>Equipos: <b>U$S 300</b></li>
            </ol>

            <h2 className="mb-4">¡No pierdas la oportunidad de ser parte de este gran evento!</h2>

            <div className="flex justify-center">
                <Inscribite />
            </div>
        </div>

    );
};

export default Detalles;
