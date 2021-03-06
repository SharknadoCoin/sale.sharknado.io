import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import AvaxIcon from "../../assets/tokens/BNB.png";
import SeaBnbIcon from "../../assets/tokens/sea-bnb.png";
import SssBnbIcon from "../../assets/tokens/sss-bnb.png";

import { StableBondContract, LpBondContract, WavaxBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const seaBNB = new LPBond({
    name: "sea_bnb_lp",
    displayName: "SEA-BNB LP",
    bondToken: "",
    bondIconSvg: SeaBnbIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "",
            reserveAddress: "0x737046EF759691fBc778CD59fDeC77B1534C39A5",
        },
    },
    lpUrl: "https://bscscan.com/token/0x737046EF759691fBc778CD59fDeC77B1534C39A5",
});

export const sssBNB = new LPBond({
    name: "sss_bnb_lp",
    displayName: "SSS-BNB LP",
    bondToken: "",
    bondIconSvg: SssBnbIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "",
            reserveAddress: "0x5A24b50ad734a87a59fF04A98520B32F48346E28",
        },
    },
    lpUrl: "https://bscscan.com/token/0x5A24b50ad734a87a59fF04A98520B32F48346E28",
});

export const wbnb = new CustomBond({
    name: "wbnb",
    displayName: "wBNB",
    bondToken: "WBNB",
    bondIconSvg: AvaxIcon,
    bondContractABI: WavaxBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "",
            reserveAddress: "",
        },
    },
    tokensInStrategy: "",
});

export const exampleBond2 = new LPBond({
    name: "",
    displayName: "",
    bondToken: "",
    bondIconSvg: "",
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "",
            reserveAddress: "",
        },
    },
    lpUrl: "",
});

export const exampleBond = new CustomLPBond({
    name: "",
    displayName: "",
    bondToken: "",
    bondIconSvg: "",
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "",
            reserveAddress: "",
        },
    },
    lpUrl: "",
});

export const mim = new StableBond({
    name: "",
    displayName: "",
    bondToken: "",
    bondIconSvg: "",
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "",
            reserveAddress: "",
        },
    },
    tokensInStrategy: "",
});

export default [seaBNB, sssBNB];
