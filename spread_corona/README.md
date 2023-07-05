```
███████╗██████╗ ██████╗ ███████╗ █████╗ ██████╗      ██████╗ ██████╗ ██████╗  ██████╗ ███╗   ██╗ █████╗ 
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗    ██╔════╝██╔═══██╗██╔══██╗██╔═══██╗████╗  ██║██╔══██╗
███████╗██████╔╝██████╔╝█████╗  ███████║██║  ██║    ██║     ██║   ██║██████╔╝██║   ██║██╔██╗ ██║███████║
╚════██║██╔═══╝ ██╔══██╗██╔══╝  ██╔══██║██║  ██║    ██║     ██║   ██║██╔══██╗██║   ██║██║╚██╗██║██╔══██║
███████║██║     ██║  ██║███████╗██║  ██║██████╔╝    ╚██████╗╚██████╔╝██║  ██║╚██████╔╝██║ ╚████║██║  ██║
╚══════╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝      ╚═════╝ ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝
```                                                                                                        

Nichts ist im Jahre 2020 und 2021 aktueller als das Thema Corona. Manche empfinden grosse Angst vor dem Virus und andere wiederum machen sich lächerlich darüber, glauben nicht daran oder erfinden sogar Verschwörungstheorien. So oder so wird viel geredet und die Medien berichten über ein Virus, wie nie zuvor. Da als Semesterarbeit verlangt wurde, ein Spiel zu programmieren, habe ich mich dazu entschlossen, ein Spiel zu entwickeln, das den vielleicht etwas schwärzeren Humor treffen sollte. Im Allgemeinen wird in dieser Semesterarbeit das Corona Virus als Spiel humoristisch wiedergegeben.


## Spielidee

In dieser Semesterarbeit wird eine einfache 2D Spielanwendung in Comic Style erstellt. Das Thema handelt sich um das Corona Virus, welches aufzeigen sollte, wie schnell eine Verbreitung möglich ist. Es werden Klischees des Corona Viruses in humoristischer Form in das Spiel eingebaut. Die Figuren und Gegenstände werden entweder selbst gezeichnet oder aus öffentlichen Vorlagen vom Internet verwendet.

Das Spiel ist auf https://spreadcorona.ch/ verfügbar.

## Regeln

Der Hauptcharakter, welches ein Corona ist, wird mittels Pfeiltasten bewegt. Die Spielebene verschiebt sich automatisch von links nach rechts. Ziel ist es dabei die entgegenkommenden Personen zu berühren und sie zu infizieren. Gegenständen wie Desinfektionsmittel, Impfungen, Masken, etc muss man ausweichen, da man ansonsten Infizierte verliert und der Punktestand kleiner wird. Die Objekte verändern die Farbe und sind nach einer Berührung nicht mehr berührbar. Der Punktestand selbst steigt und sinkt exponentiell, da es in der Realität mit Corona ähnlich abläuft. Wenn der Infizierten-Punktestand steigt, wird die Corona Figur auch grösser und schneller, so dass es schwieriger wird den Objekten auszuweichen. Wenn der Punktestand sinkt, wird man entsprechend kleiner und langsamer. Wenn man den Punktestand Null erreicht, ist das Spiel vorbei, da Corona in der Realität auch weg wäre, wenn es keine Infizierten mehr gibt. Ziel des Spiels ist es, möglichst lange zu überleben. Wenn man verliert, wird die erreichte Zeit und der maximal höchst erreichte Infektionsstand angezeigt. Falls man zu den 10 besten Spieler gehört, erhält man die Möglichkeit seinen Namen anzugeben und man wird zu den Top 10 gespeichert, welche im Menu aufrufbar sind.


## Abgrenzung

Das Spiel soll eine einfach zu bedienende Anwendung sein, damit auch jüngere Spieler, welche nicht lesen können, das Spiel bedienen können. Entsprechend wird darauf geachtet, dass wenig Wörter verwendet werden und das Spiel möglichst intuitiv zu bedienen ist. Das Spiel wird nicht für Mobile Geräte wie Tablets oder Smartphones bedienbar sein.


## Technologie Stack

Für die Realisierung des Spiels wird als Frontend HTML5, CSS3 und JavaScript verwendet. Als JavaScript-Softwarebibliothek wird ReactJS eingesetzt. Das Spiel wird mittels dem Canvas HTML Element dargestellt. Die Daten werden auf ein JSON File mittels node.js über eine API gespeichert.

Die API soll nach dem REST Standard gestaltet werden. Da die API nur für ein kleines Projekt vorgesehen ist, gibt es keinen Grund ein allgemein definiertes Schema zu verwenden. Die einzelnen Ressourcen der API sollen über einen Unique Resource Identifier (URI) angesprochen werden, was der Konvention des Unified Interface Constraint von REST entspricht. Die Anfragen an die API werden mittels eines JSON Objektes durchgeführt und die Daten werden als JSON Objekte zurückgegeben.

Für das Code Management wird GitLab eingesetzt. Damit eine automatisierte Überprüfung der Korrektheit der Dateien der Semesterarbeit erleichtert wird, wird eine CI/CD-Pipelines im Gitlab angewendet. Für die Unit Tests wird das Tool «Jest» verwendet.


## Installation

1. Klone Repository mit: "git clone https://git.ffhs.ch/shankar.ram/webt/-/tree/dev-bsc.inf.2016-angela"
2. Gehe in den Ordner spread_corona: "cd spread_corona"
2. Installiere npm: "npm install"
3. Starte React-App mit: "npm start"
4. Gehe in den Ordner spread_corona_api: "cd .." und "cd spread_corona_api"
5. Installiere wieder npm: "npm install"
6. Starte Node Server mit "node app.js"



## Modularisierung

Das Projekt wird unterteilt mit den Ordnern "images", "modules" und "tests". Im Ordner "images" findet man alle Bilder vor, welche für dieses Projekt verwendet werden. In "modules" sind alle Module enthalten, welche wieder in Ordner unterteilt sind. In den jeweiligen Modul-Ordner befinden sich die Skripts und Scss Dateiender einzelnen Module. Im Ordner "tests" befinden sich die Mocks- und Unit-Tests.


## Verfügbare Skripte

Im Projektverzeichnis können folgende Skripte ausgeführt werden:

### `npm start`

Führt die App im Entwicklungsmodus aus. <br>
Öffne http://localhost:3000 um die App im Browser anzuzeigen.
Die Seite wird neu geladen, wenn Änderungen vorgenommen werden. <br>

### `npm test`

Startet den Test-Runner im interaktiven Überwachungsmodus. <br>

### `npm run build`

Erstellt die App für die Produktion im Ordner "build". <br>
Es bündelt React im Produktionsmodus korrekt und optimiert den Build für die beste Leistung.
Der Build wird minimiert und die Dateinamen enthalten die Hashes. <br>
