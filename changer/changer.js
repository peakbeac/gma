const button = document.getElementById("convert");

button.addEventListener("click", () => {
    const input = document.getElementById("input");

    let output = "";

    if (input.startsWith("Grandma for"))
    {
        const lines = input.split("\n")

        const languageDef = lines[0].split(" ");

        switch(languageDef[2])
        {
            case "HTML":
                output = "<!DOCTYPE html>\n<html>";
                for(let i = 1; i <= lines.length; i++)
                {
                    if (lines[i].toLowerCase() == "")
                    {
                        output += "\n";
                    }
                    else if (lines[i].toLowerCase() == "insides start")
                    {
                        output += "<head>\n";
                    }
                    else if (lines[i].toLowerCase().includes("site title"))
                    {
                        output = output + "<title>" + lines[i].split('"')[1] + "</title>\n";
                    }
                    else if (lines[i].toLowerCase() == "insides end")
                    {
                        output += "</head>\n";
                    }
                    else if (lines[i].toLowerCase() == "contents begin")
                    {
                        output += "<body>\n";
                    }
                    else if (lines[i].toLowerCase().includes("header"))
                    {
                        output = output + "<h" + lines[i].split(" ")[1] + ">" + lines[i].split('"')[1] + "</h" + lines[i].split(" ")[1] + ">\n";
                    }
                    else if (lines[i].toLowerCase().includes("paragraph"))
                    {
                        output = output + "<p>" + lines[i].split('"')[1] + "</p>\n";
                    }
                    else if (lines[i].toLowerCase() == "contents end")
                    {
                        output += "</body>\n"
                    }
                }
                output += "</html>"
        }
    }
})