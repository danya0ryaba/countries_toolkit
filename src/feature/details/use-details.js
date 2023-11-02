import { useDispatch, useSelector } from "react-redux";
import { loadCountryByName, selectDetails, clearDetails } from './details-slice'
import { useEffect } from "react";

export const useDetails = (name) => {
    const dispatch = useDispatch();
    const details = useSelector(selectDetails);

    useEffect(() => {
        dispatch(loadCountryByName(name));

        return () => {
            dispatch(clearDetails());
        }
    }, [name, dispatch]);
    return details
}