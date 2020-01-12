import React from 'react';
import s from './About.module.sass';
import ToggleButton from '../components/Menu/ToggleButton';
import MainMenu from '../components/Menu/MainMenu';
import Header from '../components/Header/Header';
import Page from '../components/Page/Page';

const About = () => (
  <>
    <ToggleButton />
    <MainMenu />
    <Header />
    <Page>
      <h2 className={s.header}>About the letter from humanity</h2>
      <blockquote className={s['quote']}>&ldquo;The fact that we all share the same cosmic origin is overwhelming, but also easy to ignore.
      Science tells us that all living beings consist of starstuff. To eliminate separative behavior such as racism and fatal international conflicts, we genuinely believe that humanity needs a major cognitive shift and to transform our basic world view into a cosmic perspective. No national boundaries are evident from space. From the cosmic vantage point, we all share the same home. All of us.&rdquo;
      <br /><i>- Martin William Landl, project creator.</i>
      </blockquote>
      <p>This vision was born on a winter night in late 2016 when a small group of visionaries in Sweden founded Onelaw Agency. In the beginning, our thoughts revolved mostly around creating a new kind of booking agency that would be working with conscious artists in the music industry. We designed our logotype and published our Instagram page. Soon though, we realized that we had discovered something more. Something rare. People from all around the world began following us, and we reached thousands of followers in just a month. Not because of the agency, but because of our logotype - a logotype which stands for universal love and global unity. So we thought, what would happen if people from all around the world started to support and identify this world view through these three simple symbols? Could we create a movement? Could we make a change? We shared this last question with our followers and got yes as an answer.&nbsp;</p>
      <p>So here we are, launching our very first global project called Letter from Humanity. Our goal is to unite the most significant number of people known so far. The first step will be sending a letter to the leaders of the world. With a scientific base and poetic sense, the letter explains how all the people signing it are connected. The explanation comes from the the laws of astrophysics which say that all living beings are built on elements traceable to the interiors of dying stars. So, according to science, we are indeed stardust. By paying attention to this fact in an open letter with signatures from all over the world, we want to create an emotional effect that brings humanity together as a united entity. In times of international conflicts and climate crisis, the project seeks to raise the awareness that we are one and that we should act more as one as well. Therefore, the letter also contains a humble appeal to the leaders that their next major descision would be taken with this overwhelming knowledge in mind.</p>
      <div className={s.creators}>
        <h3><strong>Project developers</strong></h3>
        <ul>
            <li>Anton Kj&ouml;rck Lind&eacute;n</li>
            <li>Anton Hedstr&ouml;m</li>
            <li>Samuel Lie</li>
        </ul>
        <h3><strong>Designers</strong></h3>
        <ul>
            <li>Jonatan Andersson</li>
            <li>Martin William Landl</li>
        </ul>
        <h3><strong>Producers</strong></h3>
        <ul>
            <li>Martin William Landl</li>
            <li>Linnea Elffors</li>
            <li>Lukas Landl</li>
            <li>Didrik Franz&eacute;n</li>
            <li>Hugo Kalm</li>
        </ul>
        <h3>Creatives</h3>
        <ul>
          <li>Achraf Benachour</li>
          <li>Benjamin Trossö</li>
          <li>Caroline Cederlöf</li>
          <li>Christian D Durtschi</li>
          <li>Dana Bonilla</li>
          <li>Gabriel Fontana</li>
          <li>Hanna Kihlgren</li>
          <li>Ida Johansson</li>
          <li>Kalle Nylander</li>
          <li>Leo Brännström</li>
          <li>Linus Erlandsson</li>
          <li>Maja Francis</li>
          <li>Matilda Aldsjö</li>
          <li>Michael Edward Ball</li>
          <li>Moa Åsen</li>
          <li>Nhabera</li>
          <li>Oliver Berger</li>
          <li>Tobias Andrén</li>
          <li>Victoria Pham</li>
        </ul>
        <h3><strong>Photographer</strong></h3>
        <ul>
            <li>Ida Gyulai</li>
        </ul>
        <h3><strong>Writers</strong></h3>
        <ul>
            <li>Martin William Landl</li>
            <li>Oliver Tassinari Rogalin</li>
        </ul>
        <h3><strong>Copywriters</strong></h3>
        <ul>
            <li>Oliver Tassinari Rogalin</li>
            <li>Jonatan Andersson</li>
            <li>Anton R Svensson</li>
        </ul>
        <h3><strong>Project creator</strong></h3>
        <ul>
          <li>Martin William Landl</li>
        </ul>
      </div>
    </Page>
  </>
);

export default About;
