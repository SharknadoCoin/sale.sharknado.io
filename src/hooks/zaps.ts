import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import allBonds from "../helpers/zap";
import { IUserBondDetails } from "../store/slices/account-slice-zap";
import { Bond } from "../helpers/zap/bond";
import { IBondDetails, IBondSlice } from "../store/slices/bond-slice-zap";
import { IReduxState } from "../store/slices/state.interface";

// Smash all the interfaces together to get the BondData Type
export interface IAllBondData extends Bond, IBondDetails, IUserBondDetails {}

const initialBondArray = allBonds;
// Slaps together bond data within the account & bonding states
function useZaps() {
    const bondLoading = useSelector<IReduxState, boolean>(state => state.bonding.loading);
    const bondState = useSelector<IReduxState, IBondSlice>(state => state.bonding);
    const accountBondsState = useSelector<IReduxState, { [key: string]: IUserBondDetails }>(state => state.account.bonds);
    //@ts-ignore
    const [zaps, setBonds] = useState<IAllBondData[]>(initialBondArray);

    useEffect(() => {
        let bondDetails: IAllBondData[];
        bondDetails = allBonds
            .flatMap(bond => {
                if (bondState[bond.name] && bondState[bond.name].bondDiscount) {
                    return Object.assign(bond, bondState[bond.name]); // Keeps the object type
                }
                return bond;
            })
            .flatMap(bond => {
                if (accountBondsState[bond.name]) {
                    return Object.assign(bond, accountBondsState[bond.name]);
                }
                return bond;
            });

        const mostProfitableBonds = bondDetails.concat().sort((a, b) => {
            return a["bondDiscount"] > b["bondDiscount"] ? -1 : b["bondDiscount"] > a["bondDiscount"] ? 1 : 0;
        });

        setBonds(mostProfitableBonds);
    }, [bondState, accountBondsState, bondLoading]);

    return { zaps, loading: bondLoading };
}

export default useZaps;
