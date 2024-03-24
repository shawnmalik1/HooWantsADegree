import requests
from bs4 import BeautifulSoup
import pandas as pd

# List of URLs to scrape
urls = [
    'https://louslist.org/CC/APMA.html',
    'https://louslist.org/CC/BME.html',
    'https://louslist.org/CC/CHE.html',
    'https://louslist.org/CC/CEE.html',
    'https://louslist.org/CC/CompSci.html',
    'https://louslist.org/CC/ENGR.html',
    'https://louslist.org/CC/ECE.html',
    'https://louslist.org/CC/MSE.html',
    'https://louslist.org/CC/MAE.html',
    'https://louslist.org/CC/STS.html',
    'https://louslist.org/CC/SYS.html',
]

# Function to check if the course number is less than or equal to 4500
def is_course_num_valid(course_num):
    # Extract the numeric part of the course number and convert to an integer
    try:
        num = int(course_num.split(' ')[1])
        return num <= 4500
    except (IndexError, ValueError):
        # If there's an error in parsing the number, we assume it's not valid
        return False

# Initialize an empty list to store course data
all_courses = []

# Loop through each URL and scrape the course data
for url in urls:
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Extract the relevant information from the HTML code
    for course_num_tag in soup.find_all('td', class_='CourseNum'):
        course_name_tag = course_num_tag.find_next_sibling('td', class_='CourseName')
        if course_name_tag:
            course_num = course_num_tag.text.strip()
            # Use the function to filter out courses with a number over 4500
            if is_course_num_valid(course_num):
                course_name_credits = course_name_tag.text.strip()
                last_paren_index = course_name_credits.rfind('(')
                if last_paren_index != -1:
                    course_name = course_name_credits[:last_paren_index].strip()
                    credits = course_name_credits[last_paren_index:].strip('()')
                    all_courses.append([course_num, course_name, credits])

# Convert the list of all courses to a pandas DataFrame
df = pd.DataFrame(all_courses, columns=['Course Code', 'Course Name', 'Credits'])

# Output the consolidated DataFrame to a CSV file
df.to_csv('all_courses.csv', index=False)
