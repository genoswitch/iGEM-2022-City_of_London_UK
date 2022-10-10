## Contents

# Background

---

Project Alfa Remask relies heavily on hardware to enable lysis and amplification to occur within a wearable facemask. Our hardware-specific objectives were as follows:

- Collect a sputum sample from the user
- Heat the sample for an hour at 65 degrees
- Transfer the sample to an amplification chamber for RPA for 15 minutes
- Transfer the sample to the detection chamber for Crispr

All while minimising complexity and input from a user perspective.

The challenges posed by such objectives can be split into two categories – time delays and heating, and we considered a variety of approaches for each.

# Heating

---

The first and foremost concern we had when considering constructing such a mask was one of energy. Simply put, could we store enough energy on the mask to safely heat the sample for an hour at 65 degrees.

To start with, we considered an exothermic chemical reaction (such as that of calcium oxide and water) within the mask as a means of generating the heat required. The benefits of such an approach were its ease of use, high energy density and relatively low cost. However, it also posed many challenges we considered too tough to pursue. Firstly, there were the biological implications of having such a reaction occur at the same time as lysis, and more importantly the issue of maintaining a constant temperature for an extended period of time. Therefore, the chemical solution to this problem was soon abandoned

The other more obvious approach (and the one we have opted for) was to electrically heat the sample. While we did initially have concerns regarding the energy required for this, some rough ideal calculations capacity indicated that a consumer button cell was theoretically up to the task, and we went about developing a model to confirm this (see model).

Once our model confirmed that heating at approximately 50mW would be sufficient for our sample size at 65 degrees, we needed a heating filament. The LR44 button cell we had chosen has an EMF of 1.5V. Rearranging P=V2/R we found that we need a heating element of resistance 45 ohms. The only suitable element of small size and such resistance was, in fact, a resistor. While resistors are designed to themselves absorb as much thermal energy as possible, we concluded that while this may add a few minutes to the start of the heating process, ultimately the excess thermal energy would be transferred to the diluted sample. The next issue was one of time.

# Time delays

---

Various solutions were considered in achieving the necessary time delays between the biological stages. The main objective in this regard was to minimise the complexity and number of user inputs and interventions needed. We initially considered a water-soluble Poly-Vinyl-Alcohol (PVA) film that would dissolve after the target time periods and allow the sample to continue to the next stage. However, given both the manufacturing challenges of PVA and that the film would need to withstand an hour of heat at 65 degrees, we quickly discarded the idea as unfeasible. Instead, we opted for 3D printable PVA, which brought several benefits. Firstly, in testing it was found to be suitably resistant to heat and could delay the sample between stages for long enough. The fact that it could be 3D printed made manufacturing the testing module far more straightforward and opened new avenues for its design. Below are images showing how a PVA plate is placed in between two stages and how flow is directed towards it.

<img style="max-width: 100%" src="https://static.igem.wiki/teams/4508/wiki/hardware/hardware-mask.png"/>
<img style="max-width: 100%" src="https://static.igem.wiki/teams/4508/wiki/hardware/hardware-mask-2.png"/>

Blue = Amplification chamber
Black = Lysis chamber
Red = PVA delay plate

By altering the thickness and infill (density of material vs air) of the plate we can easily alter the resultant time delay between stages. While testing revealed a proportional relationship between plate thickness and time delay, extra thickness is needed between the lysis and amplification stages due to the heat of the sample.

# Cost model/Bulk

---

The cost model below outlines how much each mask cost us to make and how much it might cost to make in bulk, in parts. The price of the LR44 button cell accounts for the fact that each can be used for two tests.
|Part|Cost per mask|Cost per mask (bulk)|
| ----------- | ----------- | ----------- |
|N95 Mask|£1|£0.40|
|Resistor|£0.05|<£0.01|
|PLA filament|£0.01|<£0.01|
|LR44 battery|£0.50|£0.15|
|PVA filament|<£0.01|<£0.01|
|Wire|<£0.01|<£0.01|
||||
|Total:|<£1.58|<£0.5|

However, while the mask could be mass manufactured with its current design, it would be far more effective, ergonomic and economical to alter some elements. Most notably, the chambers for each stage need not be 3D printed with PLA, but rather should be injection moulded to improve precision and cost. In addition, instead of using a resistor for heating a thin nichrome wire would better regulate temperature. This is because nichrome has a high temperature coefficient of resistivity, meaning as the temperature of the sample increases, the heating power would decrease. This would better regulate the temperature of the sample in lysis to 65 degrees.

# Operation

---

After wearing the mask for two hours the user can then initiate the testing process. From a user perspective it is as follows:

- Press water reservoir button and insert battery
- Wait one hour and remove the battery (\*)
- Wait 20 minutes

(\*)Removing the battery is optional but allows it to be used once more for another test.

Following this there will either be one or two lines on the lateral flow to indicate a negative/positive result.
