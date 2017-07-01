import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import MenuIcon from 'material-ui-icons/Menu'
import IconButton from 'material-ui/IconButton'
import Paper from 'material-ui/Paper'
import Drawer from 'material-ui/Drawer'

class App extends Component {
  state = {
    open: false
  }

  handleLeftClose = () => this.setState({ open: !this.state.open })
  render() {
    return (
      <Router>
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="contrast" aria-label="Menu">
                <MenuIcon onClick={() => this.setState({ open: true })} />
              </IconButton>
              <Typography style={{ flex: 1 }} type="headline" color="inherit">GST Info India</Typography>
              <Drawer open={this.state.open} onRequestClose={this.handleLeftClose} onClick={this.handleLeftClose}>
                <div>
                  <List disablePadding>
                    <div>
                      <Link to="/">
                        <ListItem button>
                          <ListItemText primary="Home" />
                        </ListItem>
                      </Link>
                      <Link to="/gst-calculator">
                        <ListItem button>
                          <ListItemText primary="Calculator" />
                        </ListItem>
                      </Link>
                      <Link to="/impact-of-gst">
                        <ListItem button>
                          <ListItemText primary="Impact" />
                        </ListItem>
                      </Link>
                      <Link to="/gst-slabs">
                        <ListItem button>
                          <ListItemText primary="Slabs" />
                        </ListItem>
                      </Link>
                    </div>
                  </List>
                </div>

              </Drawer>

            </Toolbar>
          </AppBar>
          <Route path="/" exact component={Home} />
          <Route path="/gst-calculator" exact component={Calculater} />
          <Route path="/impact-of-gst" exact component={Impact} />
          <Route path="/gst-slabs" exact component={Slabs} />
        </div>
      </Router>
    )
  }
}

// <Paper style={{ padding: 16, marginBottom: 16 }} elevation={4}>
//   <Typography type="title">
//     Introduction
//   </Typography>

//   <Typography style={{ marginTop: '10px' }} type="body1" component="p">
//     As per
//     {' '}
//     <a href="https://en.wikipedia.org/wiki/Goods_and_Services_Tax_(India)">Wikipedia</a>
//     , The General Service Taxation (GST) scheme known as the Goods and Services Tax (GST) is an indirect tax throughout India to replace taxes levied by the central and state governments. It was introduced as The Constitution (One Hundred and First Amendment) Act 2017, following the passage of Constitution 122nd Amendment Bill. The GST is governed by a GST Council and its Chairman is the Finance Minister of India. Under GST, goods and services will be taxed at the following rates, 0%, 5%, 12%, 18%, 28%. There is a special rate of 0.25% on rough precious and semi-precious stones and 3% on gold.
//   </Typography>
//   <Typography style={{ marginTop: '10px' }} type="body1" component="p">
//     The Goods and Services Tax (GST), India's biggest tax reform in 70 years of independence, was launched on the midnight of 30 June 2017 by the Prime Minister of India Narendra Modi. The launch was marked by a historic midnight (June 30-July 1, 2017) session of both the houses of parliament convened at the Central Hall of the Parliament. The session was also attended by high-profile guests from the business and the entertainment industry and the likes of industrialist Ratan Tata. It was the fifth time in the history of India’s independence that such a midnight session was held there. The other four include: the first, August 15, 1947, declaring India’s independence marked by Nehru’s historic speech Tryst with Destiny; the second, August 15, 1972, celebrating the silver jubilee of India’s independence; the third, August 10, 1992, celebrating the golden jubilee of the Quit India Movement; and the fourth, August 15, 1997: celebrating the golden jubilee of India’s Independence.
//   </Typography>
//   <Typography style={{ marginTop: '10px' }} type="body1" component="p">
//     Members of the Congress boycotted the GST launch altogether. They were joined by members of the Trinamool Congress, Communist Parties of India and the DMK, who reportedly found virtually no difference between the existing taxation system, and therefore claimed that the government was trying to merely rebrand the current taxation system but made it worse for common people by increasing existing rates on common items and reducing rates oh luxury items. GST was initially proposed to replace a slew of indirect taxes with a unified tax and was therefore set to dramatically reshape the country's 2 trillion dollar economy. However, it has been meet with sharp criticism from various fronts.
//   </Typography>

// </Paper>

const Home = () => (
  <div style={{ margin: 16 }}>

    <Paper style={{ padding: 16, marginBottom: 16 }} elevation={4}>
      <Typography type="title">
        Easier Taxation
      </Typography>
      <Typography type="body1" style={{ marginTop: '10px' }}>
        Introduction of GST removes a bulk of other taxations. Here is the overview of the same.
      </Typography>
      <Typography type="subheading" style={{ marginTop: '10px' }}>
        Central Level
      </Typography>
      <ol>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Central Excise Duty
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Additional Excise Duty
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Service Tax
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Additional Customs Duty commonly known as Countervailing Duty
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Special Additional Duty of Customs
          </Typography>
        </li>
      </ol>

      <Typography type="subheading" style={{ marginTop: '10px' }}>
        State Level
      </Typography>
      <ol>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Subsuming of State Value Added Tax/Sales Tax
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Entertainment Tax (other than the tax levied by the local bodies), Central Sales Tax (levied by the Centre and collected by the States)
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Octroi and Entry tax
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Purchase Tax
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Luxury Tax
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Taxes on lottery, betting and gambling
          </Typography>
        </li>
      </ol>

    </Paper>

    <Paper style={{ padding: 16, marginBottom: 16 }} elevation={4}>
      <Typography type="title">
        GST Checklist
      </Typography>
      <Typography type="body1" style={{ marginTop: '10px' }}>
        Make a move to GST with this easy to follow checklist.
      </Typography>

      <ol>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Register yourself under GST <strong>state-wise</strong>
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Detailed working of closing stock as on 30th June 2017
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Apportion your closing stock into quantity and item rate per quantity
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Classify stock- rate, purchase interstate or intrastate, duty paid or exempted
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Correct the mismatch reports of purchases under VAT Act and file revised returns for mismatch
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Collect Form-C, Form-H, and Form-I for the stocks on which ITC is to be claimed
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Finalize your Books of Accounts along with stock details provided to Banks/ Financial Institutions.

          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Destock ageing stock, and sell all stock lying around for more than 12 months

          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Provide your GSTIN to all your supplier and collect GSTIN from all vendors

          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            If registered as centralized service provider, apply for migration for such states

          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Make a list of rates and HSN Codes under GST for all goods dealt with

          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Make a list of all things on which reverse charge will be applicable

          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Ensure that all debit/ credit notes are serially numbered

          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Your existing accounting software is integrated with your GST return filing software

          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Your invoicing solution is in line with the formats and rules for invoicing under GST

          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Decide and prepare a list of Place of Supply for all your business activity

          </Typography>
        </li>

      </ol>

    </Paper>
  </div>
)
const Calculater = () => (
  <div style={{ margin: 16 }}>

    <Paper style={{ padding: 16, marginBottom: 16 }} elevation={4}>
      <Typography type="title">
        Calculate GST
      </Typography>
      <Typography type="body1" style={{ marginTop: '10px' }}>
        There are already many resources online that will allow you to calculate the GST according to HSN, SAC or product name
      </Typography>

      <ol>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            <a href="https://www.indiafilings.com/find-gst-rate">Get HSN/SAC & GST Rate using product Lookup</a>
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            <a href="https://cleartax.in/s/gst-hsn-lookup">Get HSN/SAC Lookup</a>
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            <a href="https://www.easycalculation.com/finance/gst-calculator-india.php">Calculate GST as per Amount</a>
          </Typography>
        </li>
      </ol>

    </Paper>
  </div>
)
const Impact = () => (
  <div style={{ margin: 16 }}>
    <Paper style={{ padding: 16, marginBottom: 16 }} elevation={4}>
      <Typography type="title">
        Impact of GST in 10 Points
      </Typography>
      <ol>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            The biggest game changer in GST is input tax credit, where credits of input taxes paid at each stage of production or service delivery can be availed in the succeeding stages of value addition. This means that the end consumer will thus only bear the GST charged by the last point in supply chain, with set-off benefits at all the earlier stages.
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            To ensure that manufacturers and service providers pass on the benefit to the final customer, the government has included an anti-profiteering clause in GST. Under this, it becomes mandatory to pass on the benefit of tax reduction due to input tax credit to the final customer.
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Petroleum products such as petrol, diesel and aviation turbine fuel have been kept out of GST as of now. The GST Council will take a decision on it at a later date. Alcohol has also been kept out of GST.
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            The implementation of the GST is not expected to have a material impact on overall inflation, the Reserve Bank of India said in its latest monetary policy statement. Economists also predict a benign inflation regime with global crude prices remaining soft and forecast of normal monsoon. Though the tax rates in some select services categories like banking and financial services go up, overall inflation may not be impacted significantly, according to economists at DBS Bank, who say the overall tax burden will get lowered over time.
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            "The impact of GST on service sector in the short term could be inflationary as the tax rate would immediately shoot up to 18 per cent. However, going forward, it is expected that due to reduced cost because of availability of GST credit on items hitherto not available, the price of services will come down which will benefit the consumers," said Sandeep Sehgal, director-tax and regulatory at Ashok Maheshwary & Associates LLP.
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Manufacturers may wait for a few weeks to gauge the net impact of GST on them as well as on wholesalers and distributors and may revise the prices accordingly later, says Mr Sehgal.
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Domestic stock markets have come off recent highs in the run-up to the GST amid some cautiousness over its implementation. In the near term, the markets are looking at the implementation of GST, says Dhiraj Relli of HDFC Securities, which sees Nifty hitting new highs of 10,300-10,400 this fiscal year. Analysts say that markets will need some time to adjust to the GST implementation process, which could partially hurt corporate earnings in the short term but will boost earnings over the long term.
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            For India Inc, the biggest benefit would be the ease of doing business. GST replaces multiple taxes, multiple interfaces, multiple compliances regime into one, says Ansh Bhargava, head for growth & alliance at Taxmann. "India is moving towards tax-compliant society where filing of returns will not just be easy but transparent too. This tax compliance will lead to higher revenue for both the central and state governments and enable them to fulfil their social objectives," he said.
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Small traders with annual turnover less than Rs. 20 lakh are exempt from GST registration. In further relief to small businesses, under the composition scheme, they will benefit from not having to meet with detailed compliances under GST. However, they will not get the benefit of input tax credit. If businesses opt for the composition scheme, traders with turnover below Rs. 75 lakh will have to pay 1 per cent tax on turnover. Manufacturers will have to pay 2 per cent while restaurant businesses will have to pay 5 per cent.
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            Commenting on the benefits of GST, Chanda Kochhar, MD & CEO of ICICI Bank said, "The GST is a transformational structural reform which will have multiple benefits - the creation of a national market; enhanced ease of doing business; greater productivity and efficiency; and improved tax compliance. This reform will result in benefits for all participants in the Indian economy, including both businesses and consumers."
          </Typography>
        </li>
      </ol>

    </Paper>
  </div>
)
const Slabs = () => (
  <div style={{ margin: 16 }}>
    <Paper style={{ padding: 16, marginBottom: 16 }} elevation={4}>
      <Typography type="title">
        Download Slabs
      </Typography>
      <ol>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            <a href="https://drive.google.com/file/d/0B9ybRYJDbOkGb3RhRXVKcTNJck0/view?usp=sharing">
              Download HSN Codes
            </a>
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            <a href="https://drive.google.com/file/d/0B9ybRYJDbOkGVDR0R1ZrdjNONGM/view?usp=sharing">
              Download SAC Codes
            </a>
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            <a href="https://drive.google.com/file/d/0B9ybRYJDbOkGSVIzZHkyRG1qZWM/view?usp=sharing">
              Download GST Slabs Chapter Wise
            </a>
          </Typography>
        </li>
        <li>
          <Typography style={{ marginTop: '10px' }} type="body1" component="p">
            <a href="https://drive.google.com/file/d/0B9ybRYJDbOkGWnhaQlJUX01oRDg/view?usp=sharing">
              Download GST Invoice Format
            </a>
          </Typography>
        </li>

      </ol>

      <Typography type="title">
        Input Tax Credit
      </Typography>

      <img style={{ marginTop: '10px' }} src={require('./tax-credit.jpg')} width="85%" alt="GST Input Tax Credit" />
      <Typography style={{ marginTop: '10px' }} type="body1" component="p">
        More Info
        {' '}
        <a href="https://www.legalraasta.com/gst/input-tax-credit-under-gst/"><strong> on LegalRaasta.com</strong></a>
      </Typography>
      <Typography style={{ marginTop: '10px' }} type="body1" component="p">
        Also Check out
        <a href="http://www.udyogsoftware.com/why-union-territory-gst-law-utgst-is-important-under-gst/">
          <strong> Importance of UGST in GST</strong>
        </a>
      </Typography>

      <Typography style={{ marginTop: '10px' }} type="body1" component="p">
        Tax Credit on Closing Stock
        <a href="https://gst.caknowledge.in/shifting-existing-input-tax-credit-closing-stock-gst/">
          <strong> Click Here</strong>
        </a>
      </Typography>
    </Paper>
  </div>
)

export default App
