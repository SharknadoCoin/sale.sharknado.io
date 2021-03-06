import { useSelector } from "react-redux";
import { Paper, Grid, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Zoom, Link } from "@material-ui/core";
import { BondTableData, BondDataCard } from "./BondRow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { changeApproval, bondAsset, calcBondDetails } from "../../store/slices/bond-slice";
import { trim } from "../../helpers";
import useBonds from "../../hooks/zaps";
import "./choosebond.scss";
import { Skeleton } from "@material-ui/lab";
import { IReduxState } from "../../store/slices/state.interface";

function ChooseZap() {
    const { zaps } = useBonds();
    const isSmallScreen = useMediaQuery("(max-width: 733px)"); // change to breakpoint query

    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    const marketPrice = useSelector<IReduxState, number>(state => {
        return state.app.marketPrice;
    });

    const treasuryBalance = useSelector<IReduxState, number>(state => {
        return state.app.treasuryBalance;
    });

    return (
        <div className="choose-bond-view">
            {/* <Box textAlign="center">
                <div className="choose-bond-view-card-container">
                        <p className="bond-name-intro">One Click Liquidity</p>
                    <p className="bond-name-sub">Based on PancakeSwap cakeLP</p>
                    <p className="bond-name-text">Zap are born to simplify everything! In one click you can convert BNB or any other Token into any LP on PancakeSwap!</p>
                </div>
                </Box> */}

            <div className="choose-bond-view">
                <Zoom in={true}>
                    <div className="choose-bond-view-card">
                        {/* <Grid container item xs={12} spacing={2} className="choose-bond-view-card-metrics">
                            <Grid item xs={12} sm={6}>
                                <Box textAlign="center">
                                    <p className="choose-bond-view-card-metrics-title">Treasury Balance</p>
                                    <p className="choose-bond-view-card-metrics-value">
                                        {isAppLoading ? (
                                            <Skeleton width="180px" />
                                        ) : (
                                            new Intl.NumberFormat("en-US", {
                                                style: "currency",
                                                currency: "USD",
                                                maximumFractionDigits: 0,
                                                minimumFractionDigits: 0,
                                            }).format(treasuryBalance)
                                        )}
                                    </p>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Box textAlign="center">
                                    <p className="choose-bond-view-card-metrics-title">TIME Price</p>
                                    <p className="choose-bond-view-card-metrics-value">{isAppLoading ? <Skeleton width="100px" /> : `$${trim(marketPrice, 2)}`}</p>
                                </Box>
                            </Grid>
                        </Grid> */}

                        {!isSmallScreen && (
                            <Grid container item>
                                <TableContainer className="choose-bond-view-card-table">
                                    <Table>
                                        {/*  <TableHead>
                                            <TableRow>
                                                <TableCell align="center">
                                                    <p className="choose-bond-view-card-table-title">LP</p>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <p className="choose-bond-view-card-table-title">Price</p>
                                                </TableCell>
                                                <TableCell align="center">
                                                    <p className="choose-bond-view-card-table-title">ROI</p>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <p className="choose-bond-view-card-table-title">Purchased</p>
                                                </TableCell>
                                                <TableCell align="right"></TableCell>
                                            </TableRow>
                                        </TableHead> */}
                                        <TableBody>
                                            {zaps.map(bond => (
                                                <BondTableData key={bond.name} bond={bond} />
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        )}
                    </div>
                </Zoom>

                <div className="choose-bond-view-card-container">
                    <a href="https://docs.sharknado.io/products/zap" target="_blank">
                        <p className="bond-name-title">Read our Docs about the Zap</p>
                    </a>
                </div>

                {isSmallScreen && (
                    <div className="choose-bond-view-card-container">
                        <Grid container item spacing={2}>
                            {zaps.map(bond => (
                                <Grid item xs={12} key={bond.name}>
                                    <BondDataCard key={bond.name} bond={bond} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChooseZap;
