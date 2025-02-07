declare type Apisource = 'tcs'
declare type Userdata = Array<IPortfolio>
declare type markets = 'TQBR' | 'TQCB' | 'TQOB'
declare type instrument = 'stock' | 'bond'

declare interface IArchive {
  archID: string
  archPortfolio: string
  archTicker: string
  archBuy: number
  archSell: number
  archCount: number
}
declare interface IPosition {
  posID: string
  posPortfoliID: string
  posTicker: string
  posIsin: string
  posFigi: string
  posType: instrument
  posMarket: markets
  posPrice: number
  posCount: number
  posArchive?: Array<IArchive>
  posNKD?: number
  posCurrency?: string
  posNominal?: number
  posCurrencyPrice?: number,
  marketPrice?: number
}
declare interface IPortfolio {
  id: string
  name: string
  depo: number
  comm: number
  markets: Array<IPosition>
}
