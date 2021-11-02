window.onload = () => {
                const birthYear = 1995;
                const currentYear = new Date().getFullYear();
                const age =
                    new Date() > new Date(`01/04/${currentYear}`)
                        ? currentYear - birthYear
                        : currentYear - birthYear - 1;
                document.getElementById("age").innerText = `${age}`;
            };