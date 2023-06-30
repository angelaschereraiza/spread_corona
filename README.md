```
███████╗██████╗ ██████╗ ███████╗ █████╗ ██████╗      ██████╗ ██████╗ ██████╗  ██████╗ ███╗   ██╗ █████╗ 
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗    ██╔════╝██╔═══██╗██╔══██╗██╔═══██╗████╗  ██║██╔══██╗
███████╗██████╔╝██████╔╝█████╗  ███████║██║  ██║    ██║     ██║   ██║██████╔╝██║   ██║██╔██╗ ██║███████║
╚════██║██╔═══╝ ██╔══██╗██╔══╝  ██╔══██║██║  ██║    ██║     ██║   ██║██╔══██╗██║   ██║██║╚██╗██║██╔══██║
███████║██║     ██║  ██║███████╗██║  ██║██████╔╝    ╚██████╗╚██████╔╝██║  ██║╚██████╔╝██║ ╚████║██║  ██║
╚══════╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝      ╚═════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝
```                                                                                                        

Nichts ist im Jahre 2020 und 2021 aktueller als das Thema Corona. Manche empfinden grosse Angst vor dem Virus und andere wiederum machen sich lä-cherlich darüber, glauben nicht daran oder erfinden sogar Verschwörungstheo-rien. So oder so wird viel geredet und die Medien berichten über ein Virus, wie nie zuvor. Da als Semesterarbeit verlangt wurde, ein Spiel zu programmieren, habe ich mich dazu entschlossen, ein Spiel zu entwickeln, das den vielleicht etwas schwärzeren Humor treffen sollte. Im Allgemeinen wird in dieser Se-mesterarbeit das Corona Virus als Spiel humoristisch wiedergegeben.


## Spielidee

In dieser Semesterarbeit wird eine einfache 2D Spielanwendung in Comic Style erstellt. Das Thema handelt sich um das Corona Virus, welches aufzeigen soll-te, wie schnell eine Verbreitung möglich ist. Es werden Klischees des Corona Viruses in humoristischer Form in das Spiel eingebaut. Die Figuren und Ge-genstände werden entweder selbst gezeichnet oder aus öffentlichen Vorlagen vom Internet verwendet.


## Regeln

Der Hauptcharakter, welches ein Corona ist, wird mittels Pfeiltasten bewegt. Die Spielebene verschiebt sich automatisch von links nach rechts. Ziel ist es dabei die entgegenkommenden Personen zu berühren und sie zu infizieren. Gegen-ständen wie Desinfektionsmittel, Impfungen, Masken, etc muss man auswei-chen, da man ansonsten Infizierte verliert und der Punktestand kleiner wird. Die Objekte verändern die Farbe und sind nach einer Berührung nicht mehr be-rührbar. Der Punktestand selbst steigt und sinkt exponentiell, da es in der Reali-tät mit Corona ähnlich abläuft. Wenn der Infizierten-Punktestand steigt, wird die Corona Figur auch grösser und langsamer, so dass es schwieriger wird den Ob-jekten auszuweichen. Wenn der Punktestand sinkt, wird man entsprechend kleiner und schneller. Wenn man den Punktestand Null erreicht, ist das Spiel vorbei, da Corona in der Realität auch weg wäre, wenn es keine Infizierten mehr gibt. Ziel des Spiels ist es, möglichst lange zu überleben. Wenn man ver-liert, wird die erreichte Zeit und der maximal höchst erreichte Infektionsstand angezeigt.


## Abgrenzung

Das Spiel soll eine einfach zu bedienende Anwendung sein, damit auch jünge-re Spieler, welche nicht lesen können, das Spiel bedienen können. Entspre-chend wird darauf geachtet, dass wenig Wörter verwendet werden und das Spiel möglichst intuitiv zu bedienen ist.


## Technologie Stack

Für die Realisierung des Spiels wird als Frontend HTML5, CSS3 und JavaScript verwendet. Als JavaScript-Softwarebibliothek wird ReactJS eingesetzt. Das Spiel wird mittels dem Canvas HTML Element dargestellt. Die Daten werden auf ein JSON File mittels node.js über eine API gespeichert.

Die API soll nach dem REST Standard gestaltet werden. Da die API nur für ein kleines Projekt vorgesehen ist, gibt es keinen Grund ein allgemein definiertes Schema zu verwenden. Die einzelnen Ressourcen der API sollen über einen Unique Resource Identifier (URI) angesprochen werden, was der Konvention des Unified Interface Constraint von REST entspricht. Die Anfragen an die API werden mittels eines JSON Objektes durchgeführt und die Daten werden als JSON Objekte zurückgegeben.

Für das Code Management wird GitLab eingesetzt. Damit eine automatisierte Überprüfung der Korrektheit der Dateien der Semesterarbeit erleichtert wird, wird eine CI/CD-Pipelines im Gitlab angewendet. Für die Unit Tests wird das Tool «Jest» verwendet.


## Installation

1. Klone Repository mit: "git clone https://git.ffhs.ch/shankar.ram/webt/-/tree/dev-bsc.inf.2016-angela"
2. Gehe in den Ordner spread_corona: "cd spread_corona"
2. Installiere npm: "npm install"
3. Starte React-App mit: "npm start"