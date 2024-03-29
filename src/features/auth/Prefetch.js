import { useEffect } from 'react';
import { store } from '../../app/store';
import { notesApiSlice } from '../notes/notesApiSlice';
import { usersApiSlice } from '../users/usersApiSlice';
import { Outlet } from 'react-router-dom';

import React from 'react'

const Prefetch = () => {
    useEffect(() => {
        console.log("sub");
        const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate());
        const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

        return () => {
            console.log("unsub");
            notes.unsubscribe();
            users.unsubscribe();
        }
    }, []);
    return <Outlet />
}

export default Prefetch
