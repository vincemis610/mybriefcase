import React from 'react'
import { NavbarMenu } from '../components/Navbar/NavbarMenu';
import { Switch, Route } from 'react-router-dom';
import { HomeScreen } from '../pages/HomeScreen';
import { Footer } from '../components/footer/Footer';
import { BlogScreen } from '../pages/BlogScreen';
import { CurriculumScreen } from '../pages/CurriculumScreen';
import { ProjectsScreen } from '../pages/ProjectsScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <NavbarMenu />
            <div>
                <Switch>
                    <Route exact path="/mybriefcase" component={HomeScreen}/>
                    <Route exact path="/home" component={HomeScreen}/>
                    <Route exact path="/curriculum" component={CurriculumScreen}/>
                    <Route exact path="/projects" component={ProjectsScreen}/>
                    <Route exact path="/blog" component={BlogScreen}/>
                </Switch>
            </div>
            <Footer />
        </>
    )
}
 