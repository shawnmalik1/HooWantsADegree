import requests
from bs4 import BeautifulSoup
import pandas as pd
import time

# URL of the website to scrape
url = "https://engineering.virginia.edu/department/computer-science/academics/undergraduate-programs/bs-computer-science"

# Send an HTTP GET request to the website
response = requests.get(url)

# Parse the HTML code using BeautifulSoup
soup = BeautifulSoup(response.content, 'html.parser')

# Extract the relevant information from the HTML code
courses = []
# Select all <a> tags that contain course information
for a_tag in soup.find_all('a', href=True):
    href_content = a_tag['href']
    # Check if the href attribute contains 'cs-' to identify course links
    if 'cs-' in href_content:
        # Extract course code and name from the text of the <a> tag
        course_text = a_tag.get_text()
        if ' - ' in course_text:
            course_parts = course_text.split(' - ')
            course_code = course_parts[0].strip()
            course_name = course_parts[1].strip()
            courses.append([course_code, course_name])

# Remove duplicates from the list
unique_courses = []
for course in courses:
    if course not in unique_courses:
        unique_courses.append(course)

# Store the information in a pandas dataframe
df = pd.DataFrame(unique_courses, columns=['Course Code', 'Course Name'])

# Add a delay between requests to avoid overwhelming the website with requests
time.sleep(1)

# Output the dataframe to a CSV file
df.to_csv('uva_cs_courses.csv', index=False)