textInput = ''


def encrypt_this(text):
    
    splitted = text.split()
    new_phrase = []
    word_setter = ''
    second_letter = ''
    last_letter = ''
    
    if text == "":
        return ''
    else:
        for word in splitted:        
            word_setter = list(word)
            word_setter[0] = str(ord(word_setter[0]))
            
            if len(word_setter) > 1:
                second_letter = word_setter[1]
                last_letter = word_setter[len(word_setter)-1]
                word_setter[1] = str(last_letter)
                word_setter[len(word_setter)-1] = str(second_letter)
                word_setter = "".join(word_setter)
                new_phrase.append(word_setter)
            else:
                word_setter = "".join(word_setter)
                new_phrase.append(word_setter)

    print(' '.join(new_phrase))
    return ' '.join(new_phrase)


encrypt_this(textInput)
