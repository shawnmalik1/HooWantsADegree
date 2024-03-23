#UVA Engineering Course Requirements
def courseRequirements():
    courseMin = 12
    courseMax = 17
    majors = {'Aerospace Engineering',
              'Chemical Engineering',
              'Civil Engineering',
              'Electrical Engineering',
              'Mechanical Engineering',
              'Computer Science',
              'Computer Engineering',
              'Biomedical Engineering',
              'Engineering Science',
              'Materials Science and Engineering',
              'Systems Engineering',}

    classMapToCredits = {
        'APMA 1110: Calculus II': 4,
        'APMA 2120: Multivariable Calculus III': 4,
        'CHEM 1410: Chemistry I': 4,
        'CS 1110: Introduction to Programming': 3,
        'ENGR 1010: Engineering Foundations 1': 4,
        'ENGR 1020: Engineering Foundations 2': 3,
        'PHYS 1425/1429: Introductory Physics I and Lab': 4,
        'PHYS 2415/2419: Introductory Physics II and Lab': 4,
        'STS 2600: Engineering Ethics': 3,
        'STS 4500: STS and Engineering Practice': 3,
        'STS 4600: The Engineer, Ethics, and Professional Responsibility': 3,
        'Math or Science Elective': 3,
        'Humanities Elective': 3,
    }