```
███████╗██████╗ ██████╗ ███████╗ █████╗ ██████╗      ██████╗ ██████╗ ██████╗  ██████╗ ███╗   ██╗ █████╗ 
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗    ██╔════╝██╔═══██╗██╔══██╗██╔═══██╗████╗  ██║██╔══██╗
███████╗██████╔╝██████╔╝█████╗  ███████║██║  ██║    ██║     ██║   ██║██████╔╝██║   ██║██╔██╗ ██║███████║
╚════██║██╔═══╝ ██╔══██╗██╔══╝  ██╔══██║██║  ██║    ██║     ██║   ██║██╔══██╗██║   ██║██║╚██╗██║██╔══██║
███████║██║     ██║  ██║███████╗██║  ██║██████╔╝    ╚██████╗╚██████╔╝██║  ██║╚██████╔╝██║ ╚████║██║  ██║
╚══════╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝      ╚═════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝
```                                                                                                        

Nichts ist im Jahre 2020 und 2021 aktueller als das Thema Corona. Manche empfinden grosse Angst vor dem Virus und andere wiederum machen sich lächerlich darüber, glauben nicht daran oder erfinden sogar Verschwörungstheorien. So oder so wird viel geredet und die Medien berichten über ein Virus, wie nie zuvor. Ich habe mich deshalb dazu entschlossen, ein Spiel zu entwickeln, das den vielleicht etwas schwärzeren Humor treffen sollte. Im Allgemeinen wird das Corona Virus als Spiel humoristisch wiedergegeben.


## Spielidee

Es wird eine einfache 2D Spielanwendung in Comic Style erstellt. Das Thema handelt sich um das Corona Virus, welches aufzeigen sollte, wie schnell eine Verbreitung möglich ist. Es werden Klischees des Corona Viruses in humoristischer Form in das Spiel eingebaut. Die Figuren und Gegenstände werden entweder selbst gezeichnet oder aus öffentlichen Vorlagen vom Internet verwendet.


## Regeln

Der Hauptcharakter, welches ein Corona ist, wird mittels Pfeiltasten bewegt. Die Spielebene verschiebt sich automatisch von links nach rechts. Ziel ist es dabei die entgegenkommenden Personen zu berühren und sie zu infizieren. Gegenständen wie Desinfektionsmittel, Impfungen, Masken, etc muss man ausweichen, da man ansonsten Infizierte verliert und der Punktestand kleiner wird. Die Objekte verändern die Farbe und sind nach einer Berührung nicht mehr berührbar. Der Punktestand selbst steigt und sinkt exponentiell, da es in der Realität mit Corona ähnlich abläuft. Wenn der Infizierten-Punktestand steigt, wird die Corona Figur auch grösser und langsamer, so dass es schwieriger wird den Objekten auszuweichen. Wenn der Punktestand sinkt, wird man entsprechend kleiner und schneller. Wenn man den Punktestand Null erreicht, ist das Spiel vorbei, da Corona in der Realität auch weg wäre, wenn es keine Infizierten mehr gibt. Ziel des Spiels ist es, möglichst lange zu überleben. Wenn man verliert, wird die erreichte Zeit und der maximal höchst erreichte Infektionsstand angezeigt.


## Abgrenzung

Das Spiel soll eine einfach zu bedienende Anwendung sein, damit auch jüngere Spieler, welche nicht lesen können, das Spiel bedienen können. Entsprechend wird darauf geachtet, dass wenig Wörter verwendet werden und das Spiel möglichst intuitiv zu bedienen ist.


## Technologie Stack

Für die Realisierung des Spiels wird als Frontend HTML5, CSS3 und JavaScript verwendet. Als JavaScript-Softwarebibliothek wird ReactJS eingesetzt. Das Spiel wird mittels dem Canvas HTML Element dargestellt. Die Daten werden auf ein JSON File mittels node.js über eine API gespeichert.

Die API soll nach dem REST Standard gestaltet werden. Da die API nur für ein kleines Projekt vorgesehen ist, gibt es keinen Grund ein allgemein definiertes Schema zu verwenden. Die einzelnen Ressourcen der API sollen über einen Unique Resource Identifier (URI) angesprochen werden, was der Konvention des Unified Interface Constraint von REST entspricht. Die Anfragen an die API werden mittels eines JSON Objektes durchgeführt und die Daten werden als JSON Objekte zurückgegeben.

Für das Code Management wird GitLab eingesetzt. Damit eine automatisierte Überprüfung der Korrektheit der Dateien der Semesterarbeit erleichtert wird, wird eine CI/CD-Pipelines im Gitlab angewendet. Für die Unit Tests wird das Tool «Jest» verwendet.


## Installation

1. Klone Repository
2. Gehe in den Ordner spread_corona: "cd spread_corona"
3. Installiere npm: "npm install"
4. Starte React-App mit: "npm start"
5. Gehe in den Ordner spread_corona_api: "cd .." und "cd
spread_corona_api"
6. Installiere wieder npm: "npm install"
7. Starte Node Server mit "node app.js"
