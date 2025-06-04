import Favicon from "./lendsqr-favicon.svg";
import Logo from "./logo.svg";
import Search from "./search.svg";
import Bell from "./bell.svg";
import CaretDown from "./caret-down.svg";
import LogoSmall from "./logo_small.svg";
import Home from "./home.svg";
import Briefcase from "./briefcase.svg";
import Clipboard from "./clipboard-list.svg";
import Settings from "./galaxy.svg";
import Users from "./user-friends.svg";
import Guarantors from "./users.svg";
import Slider from "./sliders-h 1.svg";
import ArrowDown from "./arrow-down.svg";
import UserRounded from "./users-rounded.svg";
import PeopleRounded from "./people-rounded.svg";
import LoanRounded from "./loan-rounded.svg";
import SavingsRounded from "./savings-rounded.svg";
import Filter from "./filter-results-button.svg";
import Ellipse from "./ellipse.svg";
import ArrowLeft from "./arrow-left.svg";
import ArrowRight from "./arrow-right.svg";
import Eye from "./eye.svg";
import UserCancel from "./user-cancel.svg";
import UserMark from "./user-mark.svg";
import BackArrow from "./back-arrow.svg";
import Avatar from "./avatar.svg";
import StarFilled from "./star-filled.svg";
import Star from "./star.svg";
import NotFound from "./not-found.svg";
import Loading from "./loading.svg";
import Hamburger from "./hamburger.svg";
import Cancel from "./cancel.svg";

const icons = {
  favicon: Favicon,
  logo: Logo,
  search: Search,
  bell: Bell,
  caretDown: CaretDown,
  logoSmall: LogoSmall,
  home: Home,
  briefcase: Briefcase,
  clipboard: Clipboard,
  settings: Settings,
  users: Users,
  guarantors: Guarantors,
  slider: Slider,
  arrowDown: ArrowDown,
  userRounded: UserRounded,
  peopleRounded: PeopleRounded,
  loanRounded: LoanRounded,
  savingsRounded: SavingsRounded,
  filter: Filter,
  ellipse: Ellipse,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  eye: Eye,
  userCancel: UserCancel,
  userMark: UserMark,
  backArrow: BackArrow,
  starFilled: StarFilled,
  star: Star,
  avatar: Avatar,
  notFound: NotFound,
  loading: Loading,
  harmburger: Hamburger,
  cancel: Cancel,
};

export type IconTypes = keyof typeof icons;

export default icons;
