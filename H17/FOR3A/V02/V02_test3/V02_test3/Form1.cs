using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace V02_test3
{
    public partial class Form1 : Form
    {
        Graphics surface1;
        Pen pen1;
        SolidBrush blueBrush, redBrush, SelectedBrush;
        Rectangle blueRect, redRect;

        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            // Draw the horizontal line
            surface1.DrawLine(pen1, 0, 50, 500, 50);

            // Draw the blue and red rectangle on the top of line
            surface1.DrawRectangle(pen1, blueRect);
            surface1.FillRectangle(blueBrush, blueRect);

            surface1.DrawRectangle(pen1, redRect);
            surface1.FillRectangle(redBrush, redRect);
        }

        private void Form1_MouseDown(object sender, MouseEventArgs e)
        {
            mousePos = this.PointToClient(Cursor.Position);

            if (blueRect.Contains(mousePos))
            {
                SelectedBrush = blueBrush;
            }
            else if (redRect.Contains(mousePos))
            {
                SelectedBrush = redBrush;
            }
            // Allow the drawing below the horizontal line
            if (mousePos.Y > 50)
            {
                // get the new X and Y postion at multiple of 20
                int newX = (mousePos.X / 20) * 20;
                int newY = (mousePos.Y / 20) * 20;
                // draw the rectangle using the blue pen and selected brush
                Rectangle rect = new Rectangle(newX, newY, 20, 20);
                surface1.DrawRectangle(pen1, rect);
                surface1.FillRectangle(SelectedBrush, rect);
            }
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // Create surface
            surface1 = this.CreateGraphics();
            // Create Pen
            pen1 = new Pen(Color.Blue, 1.0f);
            // Create brush
            blueBrush = new SolidBrush(Color.Blue);
            redBrush = new SolidBrush(Color.Red);
            // Set default brush
            SelectedBrush = blueBrush;
            // Define the rectangular
            blueRect = new Rectangle(20, 20, 20, 20);
            redRect = new Rectangle(50, 20, 20, 20);

        }

        // Declare the mouse position
        Point mousePos;

        public Form1()
        {
            InitializeComponent();
        }
    }
}
