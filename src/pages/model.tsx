import * as React from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import CodeBlock from '../components/CodeBlock';
import HeaderTags from '../components/HeaderTags';

import ParallaxHeader from '../components/ParallaxHeader';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';

import SimulationSnippet from '../../pages/modelling/snippets/simulation.py';
import MatricesSnippet from '../../pages/modelling/snippets/matrices.py';
import LysisSimSnippet from '../../pages/modelling/snippets/lysis_sim.py';

import 'bootstrap/dist/css/bootstrap.min.css';

// Component with a desmos *thumbnail* and link as we are not allowed to embed it directly
class DesmosCard extends React.Component {
  static defaultProps = {
    title: 'Desmos Calculator',
    thumbnail:
      'https://static.igem.org/websites/common/2022/logos/igem-logo-dark.svg',
    link: 'https://desmos.com/calculator',
  };

  render() {
    return (
      <div>
        <Card style={{ width: '26rem' }}>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>
              {this.props.title}
            </Card.Title>
            <Card.Img src={this.props.thumbnail} />
          </Card.Body>
          <Card.Footer>
            <Card.Link href={this.props.link}>
              Click here to open this graph in Desmos.
            </Card.Link>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

class GIFCard extends React.Component {
  render() {
    return (
      <div style={{ padding: 16 }}>
        <Card>
          <Card.Body>
            <Card.Title style={{ textAlign: 'center' }}>
              {this.props.title}
            </Card.Title>
          </Card.Body>
          <Card.Img
            variant="top"
            src={`https://static.igem.wiki/teams/4508/wiki/site-res/modelling-embeds/${this.props.src}`}
          />
        </Card>
      </div>
    );
  }
}

class ModellingPage extends React.Component {
  static defaultProps = {
    data: '# Placeholder Page',
    title: 'Title', // is this unused here?
  };

  render() {
    return (
      <div>
        <HeaderTags title={`aLFA | Modelling`} />
        <NavBar />
        <ParallaxHeader
          title={'Modelling'}
          bgSrc="https://static.igem.wiki/teams/4508/wiki/site-res/banners/modelling-banner-hq.png"
        />
        <div style={{ height: 20 }} />
        <Container>
          <div class="converted-standalone-header">
            <header id="title-block-header">
              <h1 class="title">
                Modelling Temperature Dissipation in the Mask Lysis Unit
              </h1>
              <p class="date" style={{ opacity: 0.8 }}>
                April 2022
              </p>
              <div class="abstract">
                <h2 class="abstract-title">Abstract</h2>
                <p>
                  We aim to model the effects of heating on different conditions
                  in the lysis unit to determine whether heating is uniform and
                  fast enough, and how scale affects it. We use thermal
                  iterative methods on a discrete space in three dimensions.
                  Code is written in Python with the NumPy library, Raster
                  Geometry and Matplotlib. Electronics information in liaison
                  with Guantanamo Krishna. Thanks to Sophie Elena - co-writer of
                  the code and modelling expert - and Jian-Hui Mo.
                </p>
              </div>
            </header>
          </div>
          {/** Add a dividing line between the header and doc content */}
          <hr />
          <MathJaxContext version={3} src={'../mathjax@3.2.2_tex-mml-chtml.js'}>
            <MathJax>
              <div class="converted-content">
                <h1 id="equations">Equations</h1>
                <p>
                  For a continuous scalar field{' '}
                  <span class="math inline">
                    \(T:\mathbb&#123;R&#125;^3 \to \mathbb&#123;R&#125;\)
                  </span>
                  representing temperature in a three dimensional volume, its
                  evolution is governed by the heat equation:
                </p>
                <p>
                  <span class="math display">
                    \[\frac&#123;\partial T&#125;&#123;\partial t&#125;=\alpha
                    \nabla^2 T\]
                  </span>{' '}
                  ... where{' '}
                  <span class="math inline">
                    \(\alpha:\mathbb&#123;R&#125;^3 \to \mathbb&#123;R&#125;\)
                  </span>{' '}
                  is the thermal diffusivity (as a scalar field).
                </p>
                <p>
                  Our model also involves a heating element, modelled as a
                  resistor, which requires more thought. The power{' '}
                  <span class="math inline">
                    \(P=\frac&#123;V^2&#125;&#123;R&#125;\)
                  </span>{' '}
                  can be substituted into the differential form of the specific
                  heat equation.
                </p>
                <p>
                  <span class="math display">\[dE = mc\cdot dT\]</span>
                </p>
                <p>
                  <span class="math display">
                    \[dT =
                    \frac&#123;dE&#125;&#123;dt&#125;\frac&#123;dt&#125;&#123;mc&#125;=
                    dt \frac&#123;P&#125;&#123;mc&#125;\]
                  </span>
                </p>
                <p>
                  However, the resistance of the element changes with
                  temperature, modelled by...{' '}
                  <span class="math display">
                    \[R = R_&#123;ref&#125;[1+\alpha(T-T_&#123;ref&#125;)]\]
                  </span>
                </p>
                <p>
                  where <span class="math inline">\(R_&#123;ref&#125;\)</span>{' '}
                  and <span class="math inline">\(T_&#123;ref&#125;\)</span> are
                  the resistance of wire and the temperature at which it was
                  measured. Combining this gives, for the wire:
                </p>
                <p>
                  <span class="math display">
                    \[dT =
                    \frac&#123;V^2&#125;&#123;mc&#125;\frac&#123;1&#125;&#123;R_&#123;ref&#125;[1+\alpha(T-T_&#123;ref&#125;)]&#125;dt\]
                  </span>
                </p>
                <p>
                  This is - in accordance with the superposition theorem - added
                  to the differential from the heat equation (which applies
                  globally)
                  <a
                    href="#fn1"
                    class="footnote-ref"
                    id="fnref1"
                    role="doc-noteref"
                  >
                    <sup>1</sup>
                  </a>
                  :
                </p>
                <p>
                  <span class="math display">
                    \[dT = \alpha \nabla^2T\cdot dt\]
                  </span>
                </p>
                <h1 id="discretisation">Discretisation</h1>
                <p>
                  The modelled volume must be divided up into discrete voxels to
                  implement an iterated approximation. Each voxel is assigned an
                  array index{' '}
                  <span class="math inline">
                    \(i,j,k: i,j,k\geq 0: i,j,k \in \mathbb&#123;Z&#125;\)
                  </span>
                  . The volume modelled is a cuboid formed of uniform cubes of
                  size{' '}
                  <span class="math inline">
                    \(\langle \Delta x,\Delta x,\Delta x\rangle\)
                  </span>
                  . The voxels are identically sized in the
                  <span class="math inline">\(z\)</span>,{' '}
                  <span class="math inline">\(x\)</span> and{' '}
                  <span class="math inline">\(y\)</span> dimensions, so the
                  equations below refer only to{' '}
                  <span class="math inline">\(i\)</span> and{' '}
                  <span class="math inline">\(x\)</span> but apply to all.
                </p>
                <p>
                  <span class="math display">\[x = i\Delta x\]</span>
                </p>
                <p>
                  <span class="math display">
                    \[i = \left\lfloor \frac&#123;x&#125;&#123;\Delta x&#125;
                    \right\rceil\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\Delta x = \frac&#123;L&#125;&#123;s&#125;\]
                  </span>
                </p>
                <p>
                  Here <span class="math inline">\(s\)</span> is the number of
                  spatial samples and{' '}
                  <span class="math inline">\(\lfloor x \rceil\)</span>
                  denotes the rounding of <span class="math inline">
                    \(x\)
                  </span>{' '}
                  to an integer. The temperature and thermal diffusivity fields
                  have now also become arrays, I will represent the entry at
                  voxel <span class="math inline">\(i,j,k\)</span> as{' '}
                  <span class="math inline">\(T_&#123;i,j,k&#125;\)</span> and{' '}
                  <span class="math inline">\(\alpha_&#123;i,j,k&#125;\)</span>,
                  respectively. Next, the Laplacian{' '}
                  <span class="math inline">\(\nabla^2\)</span>, usually defined
                  as an operator on continuous fields in 3D Cartesian
                  coordinates as
                </p>
                <p>
                  <span class="math display">
                    \[\nabla^2 = \frac&#123;\partial^2&#125;&#123;\partial
                    x^2&#125;+\frac&#123;\partial^2&#125;&#123;\partial
                    y^2&#125;+\frac&#123;\partial^2&#125;&#123;\partial
                    z^2&#125;\]
                  </span>
                </p>
                <p>
                  must now be defined discretely (central differencing). In one
                  dimension:
                </p>
                <p>
                  <span class="math display">
                    \[\begin&#123;split&#125; \nabla^2T_&#123;i&#125; =
                    \frac&#123;\Delta&#125;&#123;\Delta
                    x&#125;\left(\frac&#123;\Delta
                    T_&#123;i&#125;&#125;&#123;\Delta x&#125;\right) =
                    \frac&#123;\Delta&#125;&#123;\Delta
                    x&#125;\left(\frac&#123;T_&#123;i+1&#125;-T_&#123;i&#125;&#125;&#123;\Delta
                    x&#125;\right) \\ =
                    \frac&#123;T_&#123;i+1&#125;-T_&#123;i&#125;-(T_&#123;i&#125;-T_&#123;i-1&#125;)&#125;&#123;\Delta
                    x^2&#125; =
                    \frac&#123;T_&#123;i+1&#125;+T_&#123;i-1&#125;-2T_&#123;i&#125;&#125;&#123;\Delta
                    x^2&#125; \end&#123;split&#125;\]
                  </span>{' '}
                  And in three
                  <a
                    href="#fn2"
                    class="footnote-ref"
                    id="fnref2"
                    role="doc-noteref"
                  >
                    <sup>2</sup>
                  </a>
                  ...{' '}
                  <span class="math display">
                    \[(\nabla^2T)_&#123;i,j,k&#125; =
                    \frac&#123;1&#125;&#123;\Delta
                    x^2&#125;[T_&#123;i+1,j,k&#125;+T_&#123;i-1,j,k&#125;+T_&#123;i,j+1,k&#125;+T_&#123;i,j-1,k&#125;+T_&#123;i,j,k+1&#125;+T_&#123;i,j,k-1&#125;-6T_&#123;i,j,k&#125;]\]
                  </span>
                </p>
                <p>
                  The iteration equations become (global, then wire-only extra
                  clause):
                </p>
                <p>
                  <span class="math display">
                    \[(\Delta T)_&#123;i,j,k&#125; =
                    \alpha_&#123;i,j,k&#125;(\nabla^2T)_&#123;i,j,k&#125;\cdot\Delta
                    t\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[(\Delta T)_&#123;i,j,k&#125; =
                    \left[\alpha_&#123;i,j,k&#125;(\nabla^2T)_&#123;i,j,k&#125;
                    +
                    \frac&#123;V^2&#125;&#123;mc&#125;\frac&#123;1&#125;&#123;R_&#123;ref&#125;[1+\alpha_&#123;i,j,k&#125;(T_&#123;i,j,k&#125;-T_&#123;ref&#125;)]&#125;\right]\Delta
                    t\]
                  </span>
                </p>
                <h1 id="model-parameters">
                  Model Parameters
                  <a
                    href="#fn3"
                    class="footnote-ref"
                    id="fnref3"
                    role="doc-noteref"
                  >
                    <sup>3</sup>
                  </a>
                </h1>
                <p>
                  <Card style={{ width: '50%' }}>
                    <Row>
                      <div class="col-md-4">
                        <Card.Img
                          style={{ maxWidth: 300 }}
                          src="https://static.igem.wiki/teams/4508/wiki/site-res/deathstar.png"
                        />
                      </div>
                      <div class="col-md-8">
                        <Card.Body>
                          The lysis unit can be modelled as the intersection of
                          three regions: a large outer Reuleaux cylinder of PLA,
                          a smaller inner Reuleaux cylinder of fluid (water),
                          and a smallest resistive cylinder with a perpendicular
                          axis.
                        </Card.Body>
                      </div>
                    </Row>
                  </Card>
                </p>
                <p>
                  The lysis unit can be modelled as being contained within a
                  small simulated volume (padding the lysis unit volume by a few
                  voxels), which itself is exposed to an infinitely absorbing
                  environment of room temperature (this is included in the
                  boundary conditions, see Section 7).
                </p>
                <h1 id="code">Code</h1>
                <p>
                  <CodeBlock
                    code={SimulationSnippet}
                    title="Simulation"
                    subtitle={'simulation.py'}
                  />
                  <CodeBlock
                    code={MatricesSnippet}
                    title="Matrices"
                    subtitle={'matrices.py'}
                  />
                  <CodeBlock
                    code={LysisSimSnippet}
                    title="Lysis Sim"
                    subtitle={'lysis_sim.py'}
                  />
                </p>
                <h1 id="the-oscillating-grid-problem">
                  The Oscillating Grid Problem
                </h1>
                <p>
                  When running iterative models, it is more time efficient to
                  use larger <span class="math inline">\(\Delta t\)</span>.
                  Considering the taxing array operations and high spatial
                  sampling rate, optimising with larger time intervals was
                  largely necessary. However, on running simulation with large
                  enough a value of{' '}
                  <span class="math inline">\(\Delta t\)</span>, we encounter
                  unexpected behaviour of the model.
                </p>
                <p>
                  <img src="https://static.igem.wiki/teams/4508/wiki/site-res/modelling-embeds/checkerboard.gif" />
                </p>
                <p>
                  Some voxels begin to oscillate, forming a checkerboard pattern
                  which is undesired. It is evident now that this is a result of
                  exceedingly large steps in temperature{' '}
                  <span class="math inline">\(\Delta T\)</span>. Since{' '}
                  <span class="math inline">\(\Delta T\)</span> is directly
                  (locally) proportional to{' '}
                  <span class="math inline">\(\Delta t\)</span>, there is a
                  limit to how large the time interval can be, before it begins
                  to induce the checkerboard oscillation observed. Knowing this
                  limit would give us the best value for{' '}
                  <span class="math inline">\(\Delta t\)</span>.
                </p>
                <p>
                  Finding this limit starts with a model of the model. Consider
                  an infinite grid of alternating pixels in 2 dimensions, with
                  temperatures
                  <span class="math inline">\(T_0\)</span> and{' '}
                  <span class="math inline">\(T_1\)</span> and all with uniform{' '}
                  <span class="math inline">\(\alpha\)</span>.
                </p>
                <p>
                  This problem is symmetric: all pixels with the same initial
                  temperature behave the same way. We expect the grid to
                  converge to a state where all the pixels have reached a mean
                  temperature.
                </p>
                <p>
                  <span class="math display">
                    \[T_\mu = \frac&#123;1&#125;&#123;2&#125;(T_0(0)+T_1(0))\]
                  </span>
                </p>
                <p>
                  The Laplacian for pixel 0{' '}
                  <span class="math inline">\(\nabla^2 T_0\)</span> is:
                </p>
                <p>
                  <span class="math display">
                    \[\nabla^2 T_0 = \frac&#123;2&#125;&#123;\Delta
                    x^2&#125;(2T_1-2T_0)\]
                  </span>
                </p>
                <p>more generally in n dimensions</p>
                <p>
                  <span class="math display">
                    \[\nabla^2 T_0 = \frac&#123;2n&#125;&#123;\Delta
                    x^2&#125;(T_1-T_0)\]
                  </span>
                </p>
                <p>Similarly, for pixels 1:</p>
                <p>
                  <span class="math display">
                    \[\nabla^2 T_1 = \frac&#123;2n&#125;&#123;\Delta
                    x^2&#125;(T_0-T_1)\]
                  </span>
                </p>
                <p>Therefore, the heat equation for both pixels yields...</p>
                <p>
                  <span class="math display">
                    \[\frac&#123;dT_0&#125;&#123;dt&#125; = \alpha\nabla^2 T_0 =
                    \frac&#123;2n\alpha&#125;&#123;\Delta x^2&#125;(T_1-T_0)\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\frac&#123;dT_1&#125;&#123;dt&#125; = \alpha\nabla^2 T_1 =
                    \frac&#123;2n\alpha&#125;&#123;\Delta x^2&#125;(T_0-T_1)\]
                  </span>
                </p>
                <p>
                  Equations (19) and (20) are coupled first order linear
                  differential equations in the two temperatures, solved
                  analytically:
                </p>
                <p>
                  <span class="math display">
                    \[\frac&#123;dT_0&#125;&#123;dt&#125;
                    =-\frac&#123;dT_1&#125;&#123;dt&#125;\]
                  </span>
                </p>
                <p>
                  <span class="math display">\[\implies T_0=-T_1+C\]</span>
                </p>
                <p>
                  <span class="math display">\[C = 2T_\mu\]</span>
                </p>
                <p>
                  <span class="math display">
                    \[\frac&#123;dT_0&#125;&#123;dt&#125; =
                    \frac&#123;2n\alpha&#125;&#123;\Delta
                    x^2&#125;(2T_\mu-2T_0)\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[k := \frac&#123;4n\alpha&#125;&#123;\Delta x^2&#125;,\quad
                    \frac&#123;dT_0&#125;&#123;dt&#125; = k(T_\mu-T_0)\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\int \frac&#123;1&#125;&#123;T_\mu-T_0&#125;dT_0 = k\int
                    dt\]
                  </span>
                </p>
                <p>
                  <span class="math display">\[-\ln|T_\mu-T_0| = kt+D\]</span>
                </p>
                <p>
                  <span class="math display">
                    \[T_\mu-T_0 = De^&#123;-kt&#125;\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[T_0(t) = T_\mu-De^&#123;-kt&#125;\]
                  </span>
                </p>
                <p>
                  I reassigned the letter <span class="math inline">\(D\)</span>{' '}
                  from the constant of integration to what would be{' '}
                  <span class="math inline">\(e^&#123;-D&#125;\)</span>, it
                  doesn’t matter as it acts as some constant until we find its
                  value, which is{' '}
                  <span class="math inline">\(D=T_\mu-T_0(0)\)</span>. Solving
                  for <span class="math inline">\(T_1\)</span> is similar...
                </p>
                <p>
                  <span class="math display">
                    \[\frac&#123;dT_1&#125;&#123;dt&#125; = k(T_\mu-T_1)\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[T_1(t) = T_\mu-Be^&#123;-kt&#125;\]
                  </span>
                </p>
                <p>
                  Here <span class="math inline">\(B=T_\mu-T_1(0)=-D\)</span>
                </p>
                <p>
                  <span class="math display">
                    \[T_1(t) = T_\mu+De^&#123;-kt&#125;\]
                  </span>
                </p>
                <p>
                  {/** DesmosCard #1 */}
                  <DesmosCard
                    title="Analytic Temp"
                    thumbnail="https://static.igem.wiki/teams/4508/wiki/site-res/modelling-embeds/modelling-desmos1x01-th6fufwipm.png"
                    link="https://www.desmos.com/calculator/th6fufwipm"
                  />
                </p>
                <p>
                  The iterative solution must be expressed in terms of a sum.
                </p>
                <p>
                  <span class="math display">
                    \[\Delta T_0 =
                    \frac&#123;k&#125;&#123;2&#125;(T_1-T_0)\Delta t\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\Delta T_1 =
                    \frac&#123;k&#125;&#123;2&#125;(T_0-T_1)\Delta t\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[T_0^&#123;[i+1]&#125; =
                    T_0^&#123;[i]&#125;+\frac&#123;k&#125;&#123;2&#125;(T_1^&#123;[i]&#125;-T_0^&#123;[i]&#125;)\Delta
                    t =
                    T_0^&#123;[i]&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)+T_1^&#123;[i]&#125;\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\begin&#123;split&#125; T_0^&#123;[1]&#125; =
                    T_0^&#123;[0]&#125;+\frac&#123;k&#125;&#123;2&#125;(T_1^&#123;[0]&#125;-T_0^&#123;[0]&#125;)\Delta
                    t \\ =
                    T_0^&#123;[0]&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)+T_1^&#123;[0]&#125;\frac&#123;k&#125;&#123;2&#125;\Delta
                    t \end&#123;split&#125;\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[T_0^&#123;[2]&#125; =
                    T_0^&#123;[1]&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)+T_1^&#123;[1]&#125;\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[T_0^&#123;[2]&#125; =
                    \left[T_0^&#123;[0]&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)+T_1^&#123;[0]&#125;\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right]\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)+\left[T_1^&#123;[0]&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)+T_0^&#123;[0]&#125;\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right]\frac&#123;k&#125;&#123;2&#125;\Delta t\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[T_0^&#123;[2]&#125; =
                    T_0^&#123;[0]&#125;\left[\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^2+\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^2\right]+T_1^&#123;[0]&#125;\left[2\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)\right]\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[T_0^&#123;[3]&#125; =
                    T_0^&#123;[2]&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)+T_1^&#123;[2]&#125;\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\begin&#123;split&#125; T_0^&#123;[3]&#125; = &amp;
                    T_0^&#123;[0]&#125;\left[\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^3+\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^2\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)+2\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^2\right] + \\ &amp;
                    T_1^&#123;[0]&#125;\left[2\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^2\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)+\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^2\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)+\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^3\right] \end&#123;split&#125;\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\begin&#123;split&#125; T_0^&#123;[3]&#125; = &amp;
                    T_0^&#123;[0]&#125;\left[\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^3+3\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^2\right] + \\ &amp;
                    T_1^&#123;[0]&#125;\left[3\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^2\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)+\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^3\right] \end&#123;split&#125;\]
                  </span>
                </p>
                <p>
                  Equations (29), (30) and (31) lead us to draw the conclusion
                  that:
                </p>
                <p>
                  <span class="math display">
                    \[T_0^&#123;[n]&#125; =
                    \sum_&#123;r=0&#125;^&#123;n&#125;\binom&#123;n&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^r\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n-r&#125;\left[D(-1)^&#123;r+n+1&#125;+T_\mu\right]\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[T_1^&#123;[n]&#125; =
                    \sum_&#123;r=0&#125;^&#123;n&#125;\binom&#123;n&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^r\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n-r&#125;\left[D(-1)^&#123;r+n&#125;+T_\mu\right]\]
                  </span>
                </p>
                <p>Proof by induction follows:</p>
                <p>
                  <span class="math display">
                    \[\begin&#123;split&#125; T_0^&#123;[1]&#125; =
                    \sum_&#123;r=0&#125;^&#123;1&#125;\binom&#123;1&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^r\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;1-r&#125;\left[D(-1)^&#123;r+2&#125;+T_\mu\right]
                    \\ = \left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)\left[D(-1)^2+T_\mu\right] +
                    \left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)\left[D(-1)^3+T_\mu\right] \\ =
                    \left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)T_1^&#123;[0]&#125; +
                    \left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)T_0^&#123;[0]&#125; \end&#123;split&#125;\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\begin&#123;split&#125; T_0^&#123;[n+1]&#125; =
                    T_0^&#123;[n]&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)+T_1^&#123;[n]&#125;\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t \right) \\ = \left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)
                    \sum_&#123;r=0&#125;^&#123;n&#125;\binom&#123;n&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^r\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n-r&#125;\left[D(-1)^&#123;r+n+1&#125;+T_\mu\right]
                    \\ + \left(\frac&#123;k&#125;&#123;2&#125;\Delta t\right)
                    \sum_&#123;r=0&#125;^&#123;n&#125;\binom&#123;n&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^r\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n-r&#125;\left[D(-1)^&#123;r+n&#125;+T_\mu\right]
                    \\ =
                    \sum_&#123;r=0&#125;^&#123;n&#125;\binom&#123;n&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;r+1&#125;\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n-r&#125;\left[D(-1)^&#123;r+n+1&#125;+T_\mu\right]
                    \\ +
                    \sum_&#123;r=0&#125;^&#123;n&#125;\binom&#123;n&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^r\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n-r+1&#125;\left[D(-1)^&#123;
                    r+n&#125;+T_\mu\right] \\ =
                    \sum_&#123;r=1&#125;^&#123;n+1&#125;\binom&#123;n&#125;&#123;r-1&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;r&#125;\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n-r+1&#125;\left[D(-1)^&#123;r+n&#125;+T_\mu\right]
                    \\ +
                    \sum_&#123;r=0&#125;^&#123;n&#125;\binom&#123;n&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^r\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n-r+1&#125;\left[D(-1)^&#123;r+n&#125;+T_\mu\right]
                    \\ =
                    \sum_&#123;r=1&#125;^&#123;n&#125;\left[\binom&#123;n&#125;&#123;r-1&#125;+\binom&#123;n&#125;&#123;r&#125;\right]\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;r&#125;\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n+1-r&#125;\left[D(-1)^&#123;r+n&#125;+T_\mu\right]
                    \\ +
                    \binom&#123;n&#125;&#123;0&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^0\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n+1&#125;\left[D(-1)^&#123;n&#125;+T_\mu\right]
                    \\ +
                    \binom&#123;n&#125;&#123;n&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n+1&#125;\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;0&#125;\left[D(-1)^&#123;2n+1&#125;+T_\mu\right]
                    \end&#123;split&#125;\]
                  </span>
                </p>
                <p>The binomial coefficient:</p>
                <p>
                  <span class="math display">
                    \[\begin&#123;split&#125;
                    \binom&#123;n&#125;&#123;r-1&#125;+\binom&#123;n&#125;&#123;r&#125;
                    =
                    \frac&#123;n!&#125;&#123;(r-1)!(n-r+1)!&#125;+\frac&#123;n!&#125;&#123;r!(n-r)!&#125;
                    \\=
                    \frac&#123;n!&#125;&#123;(r-1)!(n-r)!&#125;\left[\frac&#123;1&#125;&#123;n-r+1&#125;+\frac&#123;1&#125;&#123;r&#125;\right]
                    \\=
                    \frac&#123;n!&#125;&#123;(r-1)!(n-r)!&#125;\left[\frac&#123;n+1&#125;&#123;(n-r+1)r&#125;\right]
                    \\=
                    \frac&#123;(n+1)!&#125;&#123;r!(n+1-r)!&#125;=\binom&#123;n+1&#125;&#123;r&#125;
                    \end&#123;split&#125;\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\begin&#123;split&#125; T_0^&#123;[n+1]&#125; =
                    \sum_&#123;r=1&#125;^&#123;n&#125;\binom&#123;n+1&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;r&#125;\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n+1-r&#125;\left[D(-1)^&#123;r+(n+1)+1&#125;+T_\mu\right]
                    \\ +
                    \binom&#123;n+1&#125;&#123;0&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^0\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n+1&#125;\left[D(-1)^&#123;(n+1)+1&#125;+T_\mu\right]
                    \\ +
                    \binom&#123;n+1&#125;&#123;n+1&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n+1&#125;\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;0&#125;\left[D(-1)^&#123;n+1+(n+1)+1&#125;+T_\mu\right]
                    \\=
                    \sum_&#123;r=0&#125;^&#123;n+1&#125;\binom&#123;n+1&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;r&#125;\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n+1-r&#125;\left[D(-1)^&#123;r+(n+1)+1&#125;+T_\mu\right]
                    \end&#123;split&#125;\]
                  </span>
                </p>
                <p>
                  The algebra of <span class="math inline">\((-1)^x\)</span>{' '}
                  allows us to add or subtract any even number to{' '}
                  <span class="math inline">\(x\)</span> and maintain the same
                  value, which was exploited for the proof. Equation (32) is
                  true for <span class="math inline">\(n=1\)</span>, and if it
                  is true for <span class="math inline">\(n\)</span>, then it is
                  also true for <span class="math inline">\(n+1\)</span>. By the
                  principle of mathematical induction, the formula must be true
                  for all{' '}
                  <span class="math inline">\(n\in\mathbb&#123;N&#125;\)</span>.
                  The formulae can be further simplified:
                </p>
                <p>
                  <span class="math display">
                    \[\begin&#123;split&#125;
                    T_0^&#123;[n]&#125;=\sum_&#123;r=0&#125;^&#123;n&#125;\binom&#123;n&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^r\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n-r&#125;\left[D(-1)^&#123;r+n+1&#125;+T_\mu\right]\\
                    =
                    T_\mu\sum_&#123;r=0&#125;^&#123;n&#125;\binom&#123;n&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^r\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n-r&#125; +
                    D(-1)^&#123;n+1&#125;\sum_&#123;r=0&#125;^&#123;n&#125;(-1)^r\binom&#123;n&#125;&#123;r&#125;\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^r\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n-r&#125;\\ =
                    T_\mu\left(1-\frac&#123;k&#125;&#123;2&#125;\Delta
                    t+\frac&#123;k&#125;&#123;2&#125;\Delta t\right)^n +
                    D(-1)^&#123;n+1&#125;\sum_&#123;r=0&#125;^&#123;n&#125;\binom&#123;n&#125;&#123;r&#125;\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t-1\right)^r\left(\frac&#123;k&#125;&#123;2&#125;\Delta
                    t\right)^&#123;n-r&#125; \\ = T_\mu+
                    D(-1)^&#123;n+1&#125;(k\Delta t-1)^n \end&#123;split&#125;\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[T_0^&#123;[n]&#125; = T_\mu- D(1-k\Delta t)^n\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[T_1^&#123;[n]&#125; = T_\mu+ D(1-k\Delta t)^n\]
                  </span>
                </p>
                <p>
                  Here are side-by-side comparisons of the analytic solutions
                  and the iterated solutions with certain{' '}
                  <span class="math inline">\(\Delta t\)</span> values, the
                  resulting behaviours of which we will impose conditions on in
                  the following section.
                </p>
                <p>
                  {/** DesmosCard #2 */}
                  <DesmosCard
                    title="Analytic vs Iterative"
                    thumbnail="https://static.igem.wiki/teams/4508/wiki/site-res/modelling-embeds/modelling-desmos1x02-iwyvy80rce.png"
                    link="https://www.desmos.com/calculator/iwyvy80rce"
                  />
                </p>
                <h1 id="conditions-for-convergent-iteration">
                  Conditions for Convergent Iteration
                </h1>
                <p>
                  We put forwards some basic conditions for convergence of the
                  checkerboard grid: conditions to stop the oscillation that is
                  observed with large enough{' '}
                  <span class="math inline">\(\Delta t\)</span>. The
                  <em>absolute condition for convergent iteration</em> is, using
                  equation (26)...
                </p>
                <p>
                  <span class="math display">\[\Delta T_0 &lt; T_1-T_0\]</span>
                </p>
                <p>
                  <span class="math display">
                    \[\Delta t &lt;
                    \frac&#123;2&#125;&#123;k&#125;\frac&#123;T_1-T_0&#125;&#123;T_1-T_0&#125;\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\Delta t &lt; \frac&#123;\Delta
                    x^2&#125;&#123;2n\alpha_&#123;max&#125;&#125;\]
                  </span>
                </p>
                <p>
                  Note the use of{' '}
                  <span class="math inline">\(\alpha_&#123;max&#125;\)</span> to
                  find the global upper bound for convergence, as{' '}
                  <span class="math inline">\(\Delta t\)</span> is a global
                  constant. The next condition eliminates the possibility of
                  either <span class="math inline">\(\Delta T\)</span>{' '}
                  vacillating from negative to positive (
                  <em>condition for unidirectional convergence</em>):
                </p>
                <p>
                  <span class="math display">
                    \[\Delta T_0 &lt; \frac&#123;1&#125;&#123;2&#125;(T_1-T_0)\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\Delta t &lt; \frac&#123;\Delta
                    x^2&#125;&#123;4n\alpha_&#123;max&#125;&#125;\]
                  </span>
                </p>
                <p>
                  Finally we can impose a third condition in order to get
                  <em>meaningful</em> or <em>accurate</em> convergent iteration.
                  An error function between the analytic and iterated solutions
                  allows us to choose a desired error level and return a
                  suitable value for{' '}
                  <span class="math inline">\(\Delta t\)</span>. The absolute
                  error between the iteration and the analytic solution at
                  discrete intervals{' '}
                  <span class="math inline">\(t_i=i\Delta t\)</span> as a
                  function of the parameter{' '}
                  <span class="math inline">\(\Delta t\)</span> is:
                </p>
                <p>
                  <span class="math display">
                    \[\varepsilon(\Delta t) =
                    \sum_&#123;i=0&#125;^&#123;\infty&#125; 2\left|[T_\mu
                    -De^&#123;-ik\Delta t&#125;]-[T_\mu-D(1-k\Delta t
                    )^i]\right|\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\varepsilon(\Delta t) =
                    2|D|\sum_&#123;i=0&#125;^&#123;\infty&#125;
                    \left|e^&#123;-ik\Delta t&#125;-(1-k\Delta t)^i\right|\]
                  </span>
                </p>
                <p>
                  Notice due to the symmetry of the solutions, we can account
                  for the
                  <span class="math inline">\(T_1\)</span> error by multiplying
                  the <span class="math inline">\(T_0\)</span> error by 2. At
                  this point it becomes easier to convert this into an integral,
                  for which we need to extend the iterated solution’s domain
                  from discrete to continuous, using{' '}
                  <span class="math inline">\(t=i\Delta t\)</span>.
                </p>
                <p>
                  <span class="math display">
                    \[\varepsilon(\Delta t) =
                    2|D|\int_&#123;0&#125;^&#123;\infty&#125;
                    \left|e^&#123;-kt&#125;-(1-k\Delta
                    t)^&#123;\frac&#123;t&#125;&#123;\Delta t&#125;&#125;
                    \right| dt\]
                  </span>
                </p>
                <p>
                  To remove the modulus, we have to assert that{' '}
                  <span class="math inline">
                    \(e^&#123;-kt&#125;\geq (1-k\Delta
                    t)^&#123;\frac&#123;t&#125;&#123;\Delta t&#125;&#125;\)
                  </span>{' '}
                  for <span class="math inline">\(t\geq0\)</span>. This is
                  difficult to prove, though it seems to hold up to large{' '}
                  <span class="math inline">\(t\)</span> for most parameters,
                  and any time this assumption breaks at large{' '}
                  <span class="math inline">\(t\)</span>, the difference between
                  the analytic and iterated solutions will be almost negligible,
                  so we can safely work with this condition. The error function
                  becomes:
                </p>
                <p>
                  <span class="math display">
                    \[\varepsilon(\Delta t) =
                    2|D|\int_&#123;0&#125;^&#123;\infty&#125;
                    e^&#123;-kt&#125;-(1-k\Delta
                    t)^&#123;\frac&#123;t&#125;&#123;\Delta t&#125;&#125; dt\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[= 2|D|\left[
                    -\frac&#123;e^&#123;-kt&#125;&#125;&#123;k&#125;-\frac&#123;(1-k\Delta
                    t)^&#123;\frac&#123;t&#125;&#123;\Delta
                    t&#125;&#125;&#125;&#123;\ln(1-k\Delta t)&#125;\Delta t
                    \right]_0^\infty\]
                  </span>
                </p>
                <p>
                  <span class="math display">
                    \[\varepsilon(\Delta t) = 2|D|\left[
                    \frac&#123;1&#125;&#123;k&#125;+\frac&#123;\Delta
                    t&#125;&#123;\ln(1-k\Delta t)&#125; \right]\]
                  </span>
                </p>
                <p>
                  Removing the <span class="math inline">\(2|D|\)</span> to
                  standardise the error function for all initial parameter, this
                  can be approximated quadratically with a Taylor expansion
                  around <span class="math inline">\(\Delta t = 0\)</span>:
                </p>
                <p>
                  <span class="math display">
                    \[\varepsilon_&#123;standard&#125;(\Delta t) \approx
                    \frac&#123;1&#125;&#123;2&#125;x+\frac&#123;k&#125;&#123;12&#125;x^2+\frac&#123;k^2&#125;&#123;24&#125;x^3
                    + \frac&#123;19k^3&#125;&#123;720&#125;x^4\]
                  </span>
                </p>
                <p>
                  This error function allows us to crudely estimate how accurate
                  any temperature simulation will be, given a value for{' '}
                  <span class="math inline">\(\Delta t\)</span>.
                </p>
                <h1 id="results">Results</h1>
                <p>
                  After the implementation of basic boundary conditions,
                  including ’repeat’ (modular space), ’void’ (infinite
                  environment with fixed temperature) and ’adiabatic’ (no heat
                  lost to surroundings, energy conserved within volume):
                </p>
                <p>
                  <Stack direction="horizontal">
                    <GIFCard
                      title="Void boundary condition (#1)"
                      src="void.gif"
                    />
                    <GIFCard
                      title="Void boundary condition (#2)"
                      src="void2.gif"
                    />
                  </Stack>
                  <Stack direction="horizontal">
                    <GIFCard
                      title="Adiabatic boundary condition (#1)"
                      src="adiabatic.gif"
                    />
                    <GIFCard
                      title="Adiabatic boundary condition (#2)"
                      src="adiabatic2.gif"
                    />
                  </Stack>
                  <Stack direction="horizontal">
                    <GIFCard
                      title="Frozen boundary condition (#1)"
                      src="frozen.gif"
                    />
                    <GIFCard
                      title="Frozen boundary condition (#2)"
                      src="frozen2.gif"
                    />
                  </Stack>
                  <Stack direction="horizontal">
                    <GIFCard
                      title="Repeat boundary condition (#1)"
                      src="repeat.gif"
                    />
                    <GIFCard
                      title="Repeat boundary condition (#2)"
                      src="repeat2.gif"
                    />
                  </Stack>
                </p>
                <p>
                  ...the simulation was run with the model parameters, with the
                  convergent <span class="math inline">\(\Delta t\)</span> and
                  rasterised using the Raster Geometry package. The results
                  follow, with an evolving heatmap showing the temperature in a
                  cross-section of the model volume and a graph tracking the
                  temperature of fixed points in the volume over time.
                </p>
                <div>
                  <img
                    style={{ maxWidth: '100%' }}
                    src="https://static.igem.wiki/teams/4508/wiki/site-res/modelling-graph.png"
                  />
                  <p>
                    The graph above shows the temperature sampled from three
                    points over time. In blue: a point in the lysis unit. In
                    orange: a point far from the resistive element. And, in
                    green is a sampled point outside of the PLA container.
                  </p>
                </div>
                <p>
                  <GIFCard title="Final Heatmap" src="heatmap.gif" />
                </p>
                <section
                  id="footnotes"
                  class="footnotes footnotes-end-of-document"
                  role="doc-endnotes"
                >
                  <hr />
                  <ol>
                    <li id="fn1">
                      <p>
                        This is an abuse of notation,{' '}
                        <span class="math inline">\(dT\)</span> is the total
                        differential, where it should be{' '}
                        <span class="math inline">\(\partial t\)</span>, but
                        these are converted to finite deltas for iteration.
                        <a
                          href="#fnref1"
                          class="footnote-back"
                          role="doc-backlink"
                        >
                          ↩︎
                        </a>
                      </p>
                    </li>
                    <li id="fn2">
                      <p>
                        <span class="math inline">
                          \(\Delta x = \Delta y = \Delta z\)
                        </span>
                        <a
                          href="#fnref2"
                          class="footnote-back"
                          role="doc-backlink"
                        >
                          ↩︎
                        </a>
                      </p>
                    </li>
                    <li id="fn3">
                      <p>
                        Thermal diffusivity values were sourced from:{' '}
                        <a href="https://thermtest.com/thermal-resources/materials-database">
                          https://thermtest.com/thermal-resources/materials-database
                        </a>
                        <a
                          href="#fnref3"
                          class="footnote-back"
                          role="doc-backlink"
                        >
                          ↩︎
                        </a>
                      </p>
                    </li>
                  </ol>
                </section>
              </div>
            </MathJax>
          </MathJaxContext>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default ModellingPage;
