
import ContactForm from './components/ContactMe.vue';
import JobsComponent from './components/ShowJobs.vue';
import ProjectsComponent from './components/ShowProjects.vue';
import UserInformation from './components/UserProperties.vue';

const routes = [
	{ path: '/', component: ProjectsComponent },
	{ path: '/jobs', component: JobsComponent },
	{ path: '/contact', component: ContactForm },
	{ path: '/userinfo', component: UserInformation }
];

export default routes;