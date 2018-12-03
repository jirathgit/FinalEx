import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service'
/**
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html',
})
export class StockPage {
  name:any;
  stock_list = ["2S","A","AAV","ABC","ABICO","ACAP","ACC","ADAM","ADVANC","AEC","AEONTS","AF","AFC","AGE","AH","AHC","AI","AIE","AIRA","AIT","AJ","AJD","AKP","AKR","ALLA","ALT","ALUCON","AMA","AMANAH","AMARIN","AMATA","AMATAV","AMC","ANAN","AOT","AP","APCO","APCS","APURE","AQ","AQUA","ARIP","ARROW","AS","ASEFA","ASIA","ASIAN","ASIMAR","ASK","ASN","ASP","ATP30","AU","AUCT","AYUD","BA","BAFS","BANPU","BAT-3K","BAY","BBL","BCH","BCP","BCPG","BDMS","BEAUTY","BEC","BEM","BFIT","BGT","BH","BIG","BIGC","BIZ","BJC","BJCHI","BKD","BKI","BLA","BLAND","BLISS","BM","BOL","BPP","BR","BROCK","BROOK","BRR","BSBM","BSM","BTC","BTNC","BTS","BTW","BUI","BWG","CBG","CCET","CCN","CCP","CEN","CENTEL","CFRESH","CGD","CGH","CHARAN","CHEWA","CHG","CHO","CHOTI","CHOW","CHUO","CI","CIG","CIMBT","CITY","CK","CKP","CM","CMO","CMR","CNS","CNT","COL","COLOR","COM7","COMAN","CPALL","CPF","CPH","CPI","CPL","CPN","CPR","CRANE","CSC","CSL","CSP","CSR","CSS","CTW","CWT","DAII","DCC","DCON","DCORP","DELTA","DEMCO","DIMET","DNA","DRACO","DRT","DSGT","DTAC","DTC","DTCI","EA","EARTH","EASON","EASTW","ECF","ECL","EE","EFORL","EGCO","EIC","EKH","EMC","EPCO","EPG","ERW","ESSO","ESTAR","EVER","F&D","FANCY","FC","FE","FER","FMT","FN","FNS","FOCUS","FORTH","FPI","FSMART","FSS","FVC","GBX","GC","GCAP","GEL","GENCO","GFPT","GIFT","GJS","GL","GLAND","GLOBAL","GLOW","GOLD","GPSC","GRAMMY","GRAND","GREEN","GSTEL","GTB","GUNKUL","GYT","HANA","HARN","HFT","HMPRO","HOTPOT","HPT","HTC","HTECH","HYDRO","ICC","ICHI","IEC","IFEC","IFS","IHL","ILINK","INET","INOX","INSURE","INTUCH","IRC","IRCP","IRPC","IT","ITD","ITEL","IVL","J","JAS","JCT","JMART","JMT","JSP","JTS","JUBILE","JUTHA","JWD","K","KAMART","KASET","KBANK","KBS","KC","KCAR","KCE","KCM","KDH","KGI","KIAT","KKC","KKP","KOOL","KSL","KTB","KTC","KTIS","KWC","KWG","KYE","L&E","LALIN","LANNA","LDC","LEE","LH","LHBANK","LHK","LIT","LOXLEY","LPH","LPN","LRH","LST","LTX","LVT","M","M-CHAI","MACO","MAJOR","MAKRO","MALEE","MANRIN","MATCH","MATI","MAX","MBAX","MBK","MBKET","MC","MCOT","MCS","MDX","MEGA","METCO","MFC","MFEC","MIDA","MILL","MINT","MJD","MK","ML","MODERN","MONO","MOONG","MPG","MPIC","MSC","MTI","MTLS","NBC","NC","NCH","NCL","NDR","NEP","NETBAY","NEW","NEWS","NINE","NKI","NMG","NNCL","NOBLE","NOK","NPK","NPP","NSI","NTV","NUSA","NWR","NYT","OCC","OCEAN","OGC","OHTL","OISHI","ORI","OTO","PACE","PAE","PAF","PAP","PATO","PB","PCA","PCSGH","PDG","PDI","PE","PERM","PF","PG","PHOL","PICO","PIMO","PJW","PK","PL","PLANB","PLAT","PLE","PM","PMTA","POLAR","POST","PPM","PPP","PPS","PR","PRAKIT","PRANDA","PREB","PRECHA","PRG","PRIN","PRINC","PRO","PSH","PSL","PSTC","PT","PTG","PTL","PTT","PTTEP","PTTGC","PYLON","Q-CON","QH","QLT","QTC","RAM","RATCH","RCI","RCL","RICH","RICHY","RJH","RML","ROBINS","ROCK","ROH","ROJNA","RP","RPC","RS","RWI","S&J","S","S11","SABINA","SALEE","SAM","SAMART","SAMCO","SAMTEL","SANKO","SAPPE","SAT","SAUCE","SAWAD","SAWANG","SC","SCB","SCC","SCCC","SCG","SCI","SCN","SCP","SE-ED","SEAFCO","SEAOIL","SELIC","SENA","SF","SFP","SGF","SGP","SHANG","SIAM","SIM","SIMAT","SINGER","SIRI","SIS","SITHAI","SKR","SLP","SMART","SMIT","SMK","SMM","SMPC","SMT","SNC","SNP","SOLAR","SORKON","SPA","SPACK","SPALI","SPC","SPCG","SPG","SPI","SPORT","SPPT","SPRC","SPVI","SQ","SR","SRICHA","SSC","SSF","SSI","SSSC","SST","STA","STANLY","STAR","STEC","STHAI","STPI","SUC","SUPER","SUSCO","SUTHA","SVH","SVI","SVOA","SWC","SYMC","SYNEX","SYNTEC","T","TACC","TAE","TAKUNI","TAPAC","TASCO","TBSP","TC","TCAP","TCB","TCC","TCCC","TCJ","TCMC","TCOAT","TEAM","TF","TFD","TFG","TFI","TGCI","TGPRO","TH","THAI","THANA","THANI","THCOM","THE","THIP","THL","THRE","THREL","TIC","TICON","TIP","TIPCO","TISCO","TIW","TK","TKN","TKS","TKT","TLUXE","TM","TMB","TMC","TMD","TMI","TMILL","TMT","TMW","TNDT","TNH","TNITY","TNL","TNP","TNPC","TNR","TOG","TOP","TOPP","TPA","TPAC","TPBI","TPC","TPCH","TPCORP","TPIPL","TPOLY","TPP","TR","TRC","TRITN","TRT","TRU","TRUBB","TRUE","TSC","TSE","TSF","TSI","TSR","TSTE","TSTH","TTA","TTCL","TTI","TTL","TTTM","TTW","TU","TUCC","TVD","TVI","TVO","TVT","TWP","TWPC","TWZ","TYCN","U","UAC","UBIS","UEC","UKEM","UMI","UMS","UNIQ","UOBKH","UP","UPA","UPF","UPOIC","UREKA","UT","UTP","UV","UVAN","UWC","VARO","VGI","VIBHA","VIH","VNG","VNT","VPO","VTE","WACOAL","WAVE","WG","WHA","WICE","WIIK","WIN","WINNER","WORK","XO","YCI","YNP","YUASA","ZMICO"];
  constructor(public navCtrl: NavController, public navParams: NavParams,private DataServiceProvider:DataServiceProvider) {
  }

  GetStockList(){
    console.log("run === this.DataServiceProvider.PostData({});");
    let run = this.DataServiceProvider.GetData({url:"http://localhost:1880/searchstock?name="+this.name}).subscribe(value => {
      if (value.access) {
        console.log("Send value01", value);
        this.stock_list = value.data;
        //return value;
      }
      else {
        console.log("Send value01 else", value);
        console.log("error", this.DataServiceProvider.HTTP_errorhandle(value.error))
        //return value;
      }
    }, error => { console.error(error.message) },
      () => { console.log('Completed subscribe007') }
    )
  }
  ViewDetail(page:string,object:any[]){
    this.navCtrl.push(page,object);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StockPage');
  }

}
