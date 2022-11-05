export class StringUtils {
    FormatText(text: string) {
        if (!text) {
            return text;
        }
        let CapitalizeText = text.split(" ").join("");
        CapitalizeText = CapitalizeText[0].toUpperCase() + CapitalizeText.slice(1).toLocaleLowerCase;
        return CapitalizeText;
    }
}

