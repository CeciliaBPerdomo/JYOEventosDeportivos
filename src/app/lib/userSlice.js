// userSlice.js
// Redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Firebase 
import { doc, setDoc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config.js';

// Thunk para agregar un usuario con ID secuencial y verificación de email
export const agregarUsuario = createAsyncThunk(
    'usuarios/agregarUsuario',
    async (values, { getState, rejectWithValue }) => {
        try {
            // Verificar si el email ya existe en Firestore
            const q = query(collection(db, "usuarios"), where("email", "==", values.email));
            const querySnapshot = await getDocs(q);


            if (!querySnapshot.empty) {
                return rejectWithValue("El email ya está registrado");
            }


            // Encriptar la contraseña solo si no es vacía
            //   let hashedPassword = "";
            //   if (values.password) {
            //     const salt = await bcrypt.genSalt(10);
            //     hashedPassword = await bcrypt.hash(values.password, salt);
            //   }

            // Guardar el usuario con la contraseña encriptada
            const userWithId = {
                ...values,
                //password: hashedPassword // Guardar la contraseña encriptada
            };

            const docRef = doc(db, "usuarios", String(values.cedula)); // Usa el ID como la clave del documento
            await setDoc(docRef, userWithId);


            return true;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Crear el slice de usuarios
const usuariosSlice = createSlice({
    name: 'usuarios',
    initialState: {
        items: [],
        loading: false,
        error: null,
        currentUser: null, // Para guardar el usuario autenticado
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder

            // Agregar usuario
            .addCase(agregarUsuario.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(agregarUsuario.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload); // Agrega el nuevo usuario con el ID generado
            })
            .addCase(agregarUsuario.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export const { setCurrentUser } = usuariosSlice.actions;
export default usuariosSlice.reducer;