function timeWord(time) {
    let timeString = ''
    let hourString = ''
    let minuteString = ''
    let amPmString = ''

    const timeArr = time.split(":")
    const hours = parseInt(timeArr[0])
    const minutes = parseInt(timeArr[1])

    const hourWords = ['twelve ', 'one ', 'two ', 'three ', 'four ', 'five ',
        'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ']

    const minuteWords = [
        'o’clock ', 'oh one ', 'oh two ', 'oh three ', 'oh four ', 'oh five ', 'oh six ', 'oh seven ', 'oh eight ', 'oh nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ',
        'eighteen ', 'nineteen ', 'twenty ', 'twenty one ', 'twenty two ', 'twenty three ',
        'twenty four ', 'twenty five ', 'twenty six ', 'twenty seven ', 'twenty eight ',
        'twenty nine ', 'thirty ', 'thirty one ', 'thirty two ', 'thirty three ', 'thirty four ',
        'thirty five ', 'thirty six ', 'thirty seven ', 'thirty eight ', 'thirty nine ', 'forty ',
        'forty one ', 'forty two ', 'forty three ', 'forty four ', 'forty five ', 'forty six ',
        'forty seven ', 'forty eight ', 'forty nine ', 'fifty ', 'fifty one ', 'fifty two ',
        'fifty three ', 'fifty four ', 'fifty five ', 'fifty six ', 'fifty seven ', 'fifty eight ',
        'fifty nine '
    ];

    if (hours === 0 && minutes === 0) {
        timeString = 'midnight';
        return timeString
    } else if (hours === 12 && minutes === 0) {
        timeString = 'noon';
        return timeString
    }

    hourString = hourWords[hours]
    minuteString = minuteWords[minutes]

    if (hours < 12) {
        amPmString = 'am'
    } else { amPmString = 'pm' }

    return hourString + minuteString + amPmString
}

module.exports = timeWord;