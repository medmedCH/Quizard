import React from 'react';

import { List } from "@material-ui/core";
import PostUI from './views/Forum/PostUI';



const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const Forum = React.lazy(() => import('./views/Forum/Forum'));

const Claims = React.lazy(() => import('./views/Claims/Claims'));
const Claim = React.lazy(() => import('./views/Claims/Claim'));
const AddPost = React.lazy(() => import('./views/Forum/ForumContainer/AddPost'));
const UserClaims = React.lazy(() => import('./views/Claims/UserClaims'));
const UserClaim = React.lazy(() => import('./views/Claims/UserClaim'));
const AddClaim = React.lazy(() => import('./views/Claims/AddClaim'));
const Stat = React.lazy(() => import('./views/Claims/Stat'));



const CreateProfile = React.lazy(() => import('./views/CreateProfile/CreateProfile'));
const EditProfile = React.lazy(() => import('./views/Users/EditProfile'));
const AddEducation = React.lazy(() => import('./views/Users/AddEducation'));
const Education = React.lazy(() => import('./views/Users/Education'));
const Profiles = React.lazy(() => import('./views/Users/Profiles'));
const SingleProfile = React.lazy(() => import('./views/Users/SingleProfile'));




const EditAccount = React.lazy(() => import('./views/Users/EditAccount'));
const SinglePost = React.lazy(() => import('./views/Forum/SinglePost'));



const EditAvatar = React.lazy(() => import('./views/Users/EditAvatar'));
const Join = React.lazy(() => import('./views/Forum/components/Join/Join'));
const Chat = React.lazy(() => import('./views/Forum/components/Chat/Chat'));


const Question = React.lazy(() => import('./views/Quizz/Question'));
const ManageQuestions = React.lazy(() => import('./views/Quizz/ManageQuestions'));
const DetailsQuestion = React.lazy(() => import('./views/Quizz/DetailsQuestion'));
const AddQuizz = React.lazy(() => import('./views/Quizz/AddQuizz'));
const QuizzAnswer = React.lazy(() => import('./views/Quizz/QuizzAnswer'));
const TeacherAnswers = React.lazy(() => import('./views/Quizz/TeacherAnswers'));
const DetailsTeacherAnswers = React.lazy(() => import('./views/Quizz/DetailsTeacherAnswers'));


const Classes = React.lazy(() => import('./views/Classes/Classes'));
const Addcl = React.lazy(() => import('./views/Classes/Ajout'));
const affcl = React.lazy(() => import('./views/Classes/Affiche'));
const affSC = React.lazy(() => import('./views/Classes/AffectSC'));
const affST = React.lazy(() => import('./views/Classes/AffectTC'));
const teachercl = React.lazy(() => import('./views/Classes/Teacherclasses'));
const mark = React.lazy(() => import('./views/Classes/MarquerP'));


const routes = [

  { path: '/', exact: true, name: 'Home', },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/Forum', exact: true, name: 'Forum', component: Forum },
  { path: '/Addpost', exact: true, name: 'Add new Post', component: AddPost },

  { path: '/Claims', exact: true, name: 'Claims', component: Claims },
  { path: '/Claims/Claim/:id', exact: true, name: 'Claim', component: Claim },
  { path: '/UserClaims', exact: true, name: 'Claims', component: UserClaims },
  { path: '/UserClaims/Claim/:id', exact: true, name: 'Claim', component: UserClaim },
  { path: '/UserClaims/AddClaim', exact: true, name: 'Add Claim', component: AddClaim },
  { path: '/Claims/stats', exact: true, name: 'Stats', component: Stat },

  { path: '/CreateProfile', exact: true, name: 'Create Profile', component: CreateProfile },
  { path: '/EditProfile', exact: true, name: 'Edit Profile', component: EditProfile },
  { path: '/Education', exact: true, name: 'Add Education', component: Education },
  { path: '/AddEducation', exact: true, name: 'Add Education', component: AddEducation },
  { path: '/Profiles', exact: true, name: 'All Profiles', component: Profiles },
  { path: '/Single/:id', exact: true, name: 'Single Profile', component: SingleProfile },






  { path: '/EditAccount', exact: true, name: 'Single Profile', component: EditAccount },
  { path: '/EditAvatar', exact: true, name: 'Edit avatar', component: EditAvatar },
  { path: '/SinglePost/:id', exact: true, name: 'Single Post', component: SinglePost },
  { path: '/Join', exact: true, name: 'Join Chat', component: Join },
  { path: '/Chat', exact: true, name: 'Chat Room', component: Chat },



  { path: '/Question', exact: true, name: 'Question', component: Question },
  { path: '/ManageQuestions', exact: true, name: 'ManageQuestions', component: ManageQuestions },
  { path: '/DetailsQuestion/:id', exact: true, name: 'DetailsQuestion', component: DetailsQuestion },
  { path: '/AddQuizz', exact: true, name: 'AddQuizz', component: AddQuizz },
  { path: '/QuizzAnswer', exact: true, name: 'QuizzAnswer', component: QuizzAnswer },
  { path: '/TeacherAnswers', exact: true, name: 'TeacherAnswers', component: TeacherAnswers },
  { path: '/DetailsTeacherAnswers/:id', exact: true, name: 'DetailsTeacherAnswers', component: DetailsTeacherAnswers },

  { path: '/Addclass', exact: true, name: 'Add Class', component: Addcl },
  { path: '/Listclasses', exact: true, name: 'List Classes', component: affcl },
  { path: '/Classes', exact: true, name: 'Manage Classes', component: Classes },
  { path: '/AffectSC', exact: true, name: 'Affectsc', component: affSC },
  { path: '/AffectST', exact: true, name: 'Affecttc', component: affST },
  { path: '/TeachC', exact: true, name: 'Aff', component: teachercl },
  { path: '/Markp', exact: true, name: 'Marquer', component: mark }


];



export default routes;
