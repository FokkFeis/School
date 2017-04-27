# CNA3A3U
## Sigurður Baldvin Friðriksson
### 091296-2339

---
#### Jæja rumpum þessu af - Dagur 1 - 26.04.17 19:46
Alltof seinn að byrja en what evs.
#### Grunn uppsetning
Byrjum á að bæta við switch-um og nefna þá
*switch 1*
```
en
conf t
hostname S1
```
*switch 2*
```
en
conf t
hostname S2
```
*Switch 3*
```
en
conf t
hostname S3
```
*og svo aftur og aftur og aftur*

Við breytum Display name handvirkt í gegnum GUI því að leti og ég er nokkuð vissum að það sé *ekki* hægt í CLI-inu

S1

S2

S3

...

---
# Stilla VLAN á svitch-ana
Byrjum á Ljósmyndun VLAN
(ég tengi S10 við S1 á port 10)
### S1
```
en
conf t
vlan 10
  name LJOSMYNDUN
  exit
interface fastEthernet 0/10
  switchport access vlan 10
  exit

vlan 11
  name KENNARAR
  exit
interface fastEthernet 0/11
  switchport access vlan 11
  exit
interface fa0/10
  switchport mode trunk
  switchport trunk allowed
```
mmmh þú heldur það, maximumbeil, I'm doing something wrong

*end of Dagur 1 - 01:24*

#### Dagur 2 - 27.04.17 07:18
beil að á allt sem ég gerði í gær.var eitthvað rugl í gangi.
