## Contents

# Why we chose this project

---

1.5 million people worldwide died from tuberculosis in 2020, making it the second leading infectious killer after COVID-19.<sup>1</sup> One of the main problems is the lack of rapid and accessible diagnostic tests, which our project aims to solve. Current methods such as X-rays, sputum cultures, blood tests and skin tests can be slow and expensive.<sup>2</sup> In contrast our mask is self-contained, relatively cheap, and only takes around 3 hours for diagnosis. It is also easy to use and non-invasive, simply requiring breathing onto the sample collection pad. The inspiration for our project was a mask designed by researchers at MIT and the Wyss institute that successfully diagnosed SARS-Cov-2, using a similar mechanism to detect the DNA of the organism. However, M.tuberculosis is significantly more difficult to lyse in order to release the DNA than SARS-Cov-2, providing an extra challenge for our biology and hardware teams.<sup>3</sup> The mask incorporates the following sequential processes:

i. thermal lysis

ii. gene amplification by RPA

iii. CRISPR detection

iv. lateral flow assay (LFA).

# Lysis

---

_Mycobacterium tuberculosis_ (_M. tuberculosis_) is a gram positive bacteria, so has a thick peptidoglycan cell wall. Therefore, it is harder to break down its wall and retrieve its DNA when compared to gram negative bacteria. In order to detect the hsp65 gene in the _Mycobacterium tuberculosis_, lysis of the bacteria is required; we have specifically utilised thermal lysis. Whilst enzymatic lysis of _M. tuberculosis_ was investigated, it required a waiting period of more than 24 hours, thus we concluded that it would be unfeasible to enforce a 24+ hour waiting time for a mask-related product. Although thermal lysis requires temperatures of 60-65 degrees celsius, our hardware system ensures that this is reached whilst still ensuring the user’s safety. Thermal lysis was also deemed safer and more reliable due to the absence of chemicals and toxins, making it the better option when the user’s wellbeing is taken into account.

<img style="max-width: 100%" src="https://static.igem.wiki/teams/4508/wiki/site-res/lysis-wiki.jpg"/>

## Thermal Lysis

- Thermal lysis would occur at approximately 60-65°C, in order for thermal lysis and amplification of the DNA to occur in one step. This was proven to also work for the H37Rv strain of _M.tuberculosis_, where it disinfected the mycobacteria culture, lysed the cells and performed helicase dependent amplification (HDA) on the extracted DNA, where HDA occured after approximately 10 minutes and the whole process took around 60 minutes.<sup>4</sup>

- Although Recombinase Polymerase Amplification (RPA) is being used in our project in place of HDA, the main objective of this thermal lysis is to be able to successfully lyse the bacteria rather than to amplify DNA.

Lysis leaves the cell in a messy state, with Mycolic acids as well as other waxy acids covalently and non-covalently connected to the cell wall. Therefore, a detergent solution is necessary to wash away unwanted particles. The proposed solution is Tween 80, which has been shown to have no effect on the function of lytic and amplification enzymes.<sup>5</sup>

## Gene Amplification

<img style="max-width: 100%" src="https://static.igem.wiki/teams/4508/wiki/site-res/rpa-wiki.jpg"/>

Recombinase Polymerase Amplification (RPA) is needed in order to achieve sufficient amounts of hsp65 gene, so it can be detected by Cas12a to signal _M. tuberculosis_ is present. This reliable method of amplification effectively complements the project due to the high sensitivity of RPA which can amplify as low as 1-10 DNA target copies.<sup>6</sup> This is ideal due to the low quantity of bacteria present in breath for someone positive for _M.tuberculosis_. The optimum temperature of RPA is 37-42°C, so no heavy machinery such as a thermocycler is needed and as it is an isothermal amplification, it does not require specialised instrumentation.<sup>7</sup> The temperature is achieved by allowing the lysis liquid to cool as it passes through to the RPA compartment.

# CRISPR Detection

---

## How it will work

<span>
<img style="max-width: 250px" src="https://static.igem.wiki/teams/4508/wiki/description/description-diagram-1.jpeg"/>
<img style="max-width: 250px" src="https://static.igem.wiki/teams/4508/wiki/description/description-diagram-2.jpg"/>
</span>

Abstract

1.  Cas12a (with gRNA) attaches to target DNA.
2.  When the Cas12a detects hsp65 and attaches to it, Cas12a becomes activated.
3.  When activated, it cleaves ssDNA attached.

Using SHERLOCKv2, we programmed CRISPR Cas12a (LbCas12a) to recognise the hsp65 gene. The hsp65 gene is usually specific to all strains of TB. In previous experiments with this gene, high sensitivity (100%) and specificity (93%) have been achieved with this gene.<sup>8</sup>

To use CRISPR Cas12a, a gRNA and a PAM are needed. PAM is a short gene sequence (around 3-4 bases long - our PAM sequence, found on 5’ of target is 5’ TTTG 3’) that the Cas enzyme can scan for to speed up the process instead of scanning for a long gRNA so that a Cas nuclease can cut and distinguish between its own DNA and the TB DNA. When the CRISPR Cas12a complex (with gRNA) recognises and binds to the promoter sequence, the gRNA attaches to the target sequence of the hsp65 gene. This activates the Cas12a cleaving function and starts to cleave the ssDNA between the FAM-ssDNA-Biotin probes attached to the enzyme. To show the hsp65 gene is detected, FAM-ssDNA-Biotin probes are cleaved and it is these cleaved probes that lead to a positive LFA result.<sup>9</sup>

## Why did we choose CRISPR Cas12a?

There are two enzymes that can be used for SHERLOCK (Specific High-sensitivity Enzymatic Reporter un-Locking) : Cas12a and Cas13. Cas12a is more compatible with our design as it cuts DNA, whereas Cas13 only cuts RNA.<sup>10</sup>

- High specificity and sensitivity
- Cost effective
- Components can be stored fairly long term before use.
- Allows the LFA to be done very quickly.
- Highly compatible with RPA.<sup>11</sup>

# LFA Output

---

<img style="max-width: 100%" src="https://static.igem.wiki/teams/4508/wiki/description/lfa-output.png"/>

**When no tuberculosis in sample** (reporter molecule not cleaved)
One end of the reporter molecule binds to the control line on the lateral flow test and the other end binds to the gold nanoparticles present in the solution, forming a line. There is a second test line beyond this that the nanoparticles can directly bind to but in this case it won’t form or will be very faint as most of the nanoparticles will have already bonded to the control line.

**When there is TB in the sample**
The reporter molecule is collaterally cleaved so the two ends will be split. Therefore the nanoparticles won’t bind to the control line as they need the full reporter molecule as an intermediate; instead they will flow to the test line and bind, forming a strong line.<sup>12</sup>

## Why did we choose LFA?

LFAs are simple and rapid, detecting the presence of certain hormones without necessitating expensive and specialised medical technology. They are easy to manufacture and distribute, making it an optimal and accessible option that isn’t costly to use on a regular basis.<sup>13,14</sup>Additionally, they are compact and easy to fit into a mask without making wearing it uncomfortable. They have a long shelf life, paired with their straightforward usage and can therefore be optimal for use in developing countries. Furthermore, the short development period of LFAs makes them easily adaptable and easy to adjust if necessary. As such, an LFA is the optimal technology for us to implement.<sup>15</sup>

# Modularity + use in wider healthcare

---

## Potential of our project

As part of our proposal to create a mask that can simultaneously prevent infection of Tuberculosis and test for the disease, we plan on transferring this system to other infectious, airborne respiratory diseases. The only components of our test that we plan on changing are the primers and the gRNA in the CRISPR detection section. This is easily done on a software called Benchling.

We believe that the versatility of the system will allow us to apply the design on a much larger scale, and potentially more internationally, rather than just targeting regions with high TB infection rates. Furthermore, our project has a potential for multiplexing, where a single diagnostic mask could potentially be used to detect multiple infections.

### Example : Streptococcus pneumoniae

S.Pneumoniae is a bacterium that has historically been the most common pathogen to cause Community-acquired pneumonia (CAP) world wide. Pneumonia accounts for 14% of all deaths of children under 5 years old, killing 740,180 children in 2019.
It is a gram-positive bacteria, so we expect that the lysis stage would remain the same.
The primers and the gRNA has been modified for S.pneumoniae.

<img style="max-width: 100%" src="https://static.igem.wiki/teams/4508/wiki/site-res/modularity-use-in-wider-healthcare.jpg"/>

<img style="max-width: 100%" src="https://static.igem.wiki/teams/4508/wiki/site-res/modularity-use-in-wider-healthcare2.png"/>

## Sources

World Health Organization. Pneumonia (2021). Available from : https://www.who.int/news-room/fact-sheets/detail/pneumonia (accessed 31/07/2022)

Dion CF, Ashurst JV. Streptococcus Pneumoniae. [Updated 2022 Apr 30]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2022 Jan-. Available from: https://www.ncbi.nlm.nih.gov/books/NBK470537/ (accessed 31/07/2022)

El Aila NA, Emler S, Kaijalainen T, De Baere T, Saerens B, Alkan E, Deschaght P, Verhelst R, Vaneechoutte M. The development of a 16S rRNA gene based PCR for the identification of Streptococcus pneumoniae and comparison with four other species specific PCR assays. BMC Infect Dis. 2010 Apr 29;10:104. doi: 10.1186/1471-2334-10-104. PMID: 20426878; PMCID: PMC2874796.

Gootenberg, Jonathan S.; Abudayyeh, Omar O.; Kellner, Max J.; Joung, Julia; Collins, James J.; Zhang, Feng (2018). _Multiplexed and portable nucleic acid detection platform with Cas13, Cas12a, and Csm6. Science, (), eaaq0179–._ doi:10.1126/science.aaq0179

# References

---

1. Who.int. 2022. _Tuberculosis (TB)._ [online] Available at: <https://www.who.int/news-room/fact-sheets/detail/tuberculosis#:~:text=Worldwide%2C%20TB%20is%20the%2013th,all%20countries%20and%20age%20groups.> [Accessed 11 October 2022].

2. nhs.uk. 2022. _Tuberculosis (TB)_ - Diagnosis. [online] Available at: <https://www.nhs.uk/conditions/tuberculosis-tb/diagnosis/#:~:text=You%20may%20have%20a%20chest,most%20effective%20treatment%20for%20you> [Accessed 11 October 2022].

3. Nguyen, P., Soenksen, L., Donghia, N., Angenent-Mari, N., de Puig, H., Huang, A., Lee, R., Slomovic, S., Galbersanini, T., Lansberry, G., Sallum, H., Zhao, E., Niemi, J. and Collins, J., 2021. Wearable materials with embedded synthetic biology sensors for biomolecule detection. Nature Biotechnology, 39(11), pp.1366-1374.

4. João Catalão, M. and Pimentel, M., 2022. _Mycobacteriophage Lysis Enzymes: Targeting the Mycobacterial Cell Envelope._ [online] Pubmed. Available at: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6116114/ [Accessed 28 July 2022].

5. Shetty, Prasad; Ghosh, Dipayan; Paul, Debjani (2017). Thermal lysis and isothermal amplification of Mycobacterium tuberculosis H37Rv in one tube. Journal of Microbiological Methods, 143(), 1–5. [online] Available at: https://scholar.google.co.uk/scholar_url?url=https://www.sciencedirect.com/science/article/pii/S0167701217302531&hl=en&sa=X&ei=9KYpY6OTOfuSy9YP1Lyz8AQ&scisig=AAGBfm01OLxgt6kasqmNH5zuZjgihikBOg&oi=scholarr [Accessed 29 July 2022].

6. Magriñá Lobato, I., 2022. _Recombinase polymerase amplification: Basics, applications and recent advances._ [online] Pubmed. Available at: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7112910/ [Accessed 16 January 2022].

7. Guo, X., Wei, Y. and Yu, B., 2022. _Recombinant Mycobacterium smegmatis expressing Hsp65-hIL-2 fusion protein and its influence on lymphocyte function in mice._ [online] Pubmed. Available at: https://pubmed.ncbi.nlm.nih.gov/22546648/ [Accessed 16 January 2022].

8. Priyadarshini P, Tiwari K, Das A, Kumar D, Mishra MN, Desikan P, Nath G. Evaluation of highly conserved _hsp65_-specific nested PCR primers for diagnosing _Mycobacterium tuberculosis._ Int J Tuberc Lung Dis. 2017 Feb 1;21(2):214-217. doi: 10.5588/ijtld.16.0343. PMID: 28234087.

9. Nguyen, P.Q., Soenksen, L.R., Donghia, N.M. _et al._ Wearable materials with embedded synthetic biology sensors for biomolecule detection. _Nat Biotechnol_ 39, 1366–1374 (2021). https://doi.org/10.1038/s41587-021-00950-3

10. Kellner MJ, Koob JG, Gootenberg JS, Abudayyeh OO, Zhang F. SHERLOCK: nucleic acid detection with CRISPR nucleases. Nat Protoc. 2019 Oct;14(10):2986-3012. doi: 10.1038/s41596-019-0210-2. Epub 2019 Sep 23. Erratum in: Nat Protoc. 2020 Mar;15(3):1311. PMID: 31548639; PMCID: PMC6956564. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6956564/

11. Li, SY., Cheng, QX., Wang, JM. _et al._ CRISPR-Cas12a-assisted nucleic acid detection. Cell Discov 4, 20 (2018). https://doi.org/10.1038/s41421-018-0028-z

12. Kaminski, M.M., Abudayyeh, O.O., Gootenberg, J.S. _et al._ CRISPR-based diagnostics. Nat Biomed Eng 5, 643–656 (2021). https://doi.org/10.1038/s41551-021-00760-7
    https://www.nature.com/articles/s41551-021-00760-7

13. Mujahed IM, Abdelrafie, A., 2021. SHERLOCK and DETECTR: CRISPR-Cas Systems as Potential Rapid Diagnostic Tools for Emerging Infectious Diseases. Journal of Clinical Microbiology. (2021) https://doi.org/10.1128/JCM.00745-20

14. 2016. _Lateral Flow Assay Development Guide._ 1st ed. [ebook] p.5. Available at: https://www.stratech.co.uk/wp-content/uploads/2016/10/BioReady-Lateral-Flow-Handbook-v-1.0.pdf [Accessed 17 January 2022].

15. Breitbach A, (2020) Lateral Flow Readout for CRISPR/Cas-based detection strategies Available at : https://www.milenia-biotec.com/en/tips-lateral-flow-readouts-crispr-cas-strategies/ (accessed 18th August 2022)
